/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@import UserNotifications;
@import Firebase;

@interface AppDelegate () <UNUserNotificationCenterDelegate>
@end

@implementation AppDelegate

NSString *const kGCMMessageIDKey = @"gcm.message_id";

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"TheTable"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  [FIRApp configure];
  [FIRMessaging messaging].delegate = self;
  
  [UNUserNotificationCenter currentNotificationCenter].delegate = self;
  UNAuthorizationOptions authOptions =
  UNAuthorizationOptionAlert
  | UNAuthorizationOptionSound
  | UNAuthorizationOptionBadge;
  [[UNUserNotificationCenter currentNotificationCenter] requestAuthorizationWithOptions:authOptions completionHandler:^(BOOL granted, NSError * _Nullable error) {
  }];
  
  [[UIApplication sharedApplication] registerForRemoteNotifications];
  [FIRMessaging messaging].shouldEstablishDirectChannel = YES;
  NSString *fcmToken = [FIRMessaging messaging].FCMToken;
  NSLog(@"FCM registration token: %@", fcmToken);
  
  
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
  // If you are receiving a notification message while your app is in the background,
  // this callback will not be fired till the user taps on the notification launching the application.
  // TODO: Handle data of notification
  
  // With swizzling disabled you must let Messaging know about the message, for Analytics
  [[FIRMessaging messaging] appDidReceiveMessage:userInfo];
  
  // Print message ID.
  if (userInfo[kGCMMessageIDKey]) {
    NSLog(@"Message ID: %@", userInfo[kGCMMessageIDKey]);
  }
  
  // Print full message.
  NSLog(@"%@", userInfo);
  
  completionHandler(UIBackgroundFetchResultNewData);
}
// [END receive_message]

// [START ios_10_message_handling]
// Receive displayed notifications for iOS 10 devices.
// Handle incoming notification messages while app is in the foreground.
- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
  NSDictionary *userInfo = notification.request.content.userInfo;
  
  // With swizzling disabled you must let Messaging know about the message, for Analytics
  [[FIRMessaging messaging] appDidReceiveMessage:userInfo];
  
  // Print message ID.
  if (userInfo[kGCMMessageIDKey]) {
    NSLog(@"Message ID: %@", userInfo[kGCMMessageIDKey]);
  }
  
  // Print full message.
  NSLog(@"%@", userInfo);
  
  // Change this to your preferred presentation option
  completionHandler(UNNotificationPresentationOptionAlert);
}

// Handle notification messages after display notification is tapped by the user.
- (void)userNotificationCenter:(UNUserNotificationCenter *)center
didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler {
  NSDictionary *userInfo = response.notification.request.content.userInfo;
  if (userInfo[kGCMMessageIDKey]) {
    NSLog(@"Message ID: %@", userInfo[kGCMMessageIDKey]);
  }
  
  // Print full message.
  NSLog(@"%@", userInfo);
  
  completionHandler();
}

// [END ios_10_message_handling]

// [START refresh_token]
- (void)messaging:(nonnull FIRMessaging *)messaging didRefreshRegistrationToken:(nonnull NSString *)fcmToken {
  // Note that this callback will be fired everytime a new token is generated, including the first
  // time. So if you need to retrieve the token as soon as it is available this is where that
  // should be done.
  NSLog(@"FCM registration token: %@", fcmToken);
  
  // TODO: If necessary send token to application server.
}
// [END refresh_token]

// [START ios_10_data_message]
// Receive data messages on iOS 10+ directly from FCM (bypassing APNs) when the app is in the foreground.
// To enable direct data messages, you can set [Messaging messaging].shouldEstablishDirectChannel to YES.
- (void)messaging:(FIRMessaging *)messaging didReceiveMessage:(FIRMessagingRemoteMessage *)remoteMessage {
  NSLog(@"Received data message: %@", remoteMessage.appData);
}
// [END ios_10_data_message]

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
  NSLog(@"Unable to register for remote notifications: %@", error);
}

// This function is added here only for debugging purposes, and can be removed if swizzling is enabled.
// If swizzling is disabled then this function must be implemented so that the APNs device token can be paired to
// the FCM registration token.
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  NSLog(@"APNs device token retrieved: %@", deviceToken);
  
  // With swizzling disabled you must set the APNs device token here.
  [FIRMessaging messaging].APNSToken = deviceToken;
}

-(void)messaging:(FIRMessaging *)messaging didReceiveRegistrationToken:(nonnull NSString *)fcmToken {
  NSLog(@"Device token retrieved: %@", fcmToken);
}

@end
