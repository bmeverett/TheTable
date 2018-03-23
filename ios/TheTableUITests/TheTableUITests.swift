//
//  TheTableUITests.swift
//  TheTableUITests
//
//  Created by Brandon Everett on 3/16/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import XCTest

class TheTableUITests: XCTestCase {
        
    override func setUp() {
        super.setUp()
        
        // Put setup code here. This method is called before the invocation of each test method in the class.
        let app = XCUIApplication()
        setupSnapshot(app)
        app.launch()
        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false
        // UI tests must launch the application that they test. Doing this in setup will make sure it happens for each test method.
        XCUIApplication().launch()

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testExample() {
        // Use recording to get started writing UI tests.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
      
      let app = XCUIApplication()
      app/*@START_MENU_TOKEN@*/.otherElements["  About"]/*[[".otherElements.matching(identifier: \" TONIGHT  WILL I . . . \/\/ Part 2  Tue Mar 13 2018 WILL I . . . \/\/ Part 1  Mon Mar 05 2018   Home   Live   Notes   Give   About Home\")",".otherElements.matching(identifier: \" TONIGHT  WILL I . . . \/\/ Part 2  Tue Mar 13 2018 WILL I . . . \/\/ Part 1  Mon Mar 05 2018   Home   Live   Notes   Give   About\")",".otherElements.matching(identifier: \"  Home   Live   Notes   Give   About\").otherElements[\"  About\"]",".otherElements[\"  About\"]"],[[[-1,3],[-1,2],[-1,1,2],[-1,0,1]],[[-1,3],[-1,2],[-1,1,2]],[[-1,3],[-1,2]]],[0]]@END_MENU_TOKEN@*/.tap()
      snapshot("04About")
      app/*@START_MENU_TOKEN@*/.otherElements["  Notes"]/*[[".otherElements.matching(identifier: \" TONIGHT  WILL I . . . \/\/ Part 2  Tue Mar 13 2018 WILL I . . . \/\/ Part 1  Mon Mar 05 2018 The Table is designed to help young adults find and follow jesus and build lasting relationships with others. We talk about big concepts, interview awesome people, serve, and eat together every month. Address  Riverside Community Church - Parkside Campus \\n800 3rd Street  \\nOakmont, PA 15139  \\n\\nContact \\nEmail:  info@thetableinbetween.org \\nPhone: 412.828.2488 \\nTimes  \\nWeekly: Tuesdays, 7PM - 8:30PM  \\nFamily Meal (last Tuesday of the month): 7PM - 8:30PM    Home   Live   Notes   Give   About Give\")",".otherElements.matching(identifier: \" TONIGHT  WILL I . . . \/\/ Part 2  Tue Mar 13 2018 WILL I . . . \/\/ Part 1  Mon Mar 05 2018 The Table is designed to help young adults find and follow jesus and build lasting relationships with others. We talk about big concepts, interview awesome people, serve, and eat together every month. Address  Riverside Community Church - Parkside Campus \\n800 3rd Street  \\nOakmont, PA 15139  \\n\\nContact \\nEmail:  info@thetableinbetween.org \\nPhone: 412.828.2488 \\nTimes  \\nWeekly: Tuesdays, 7PM - 8:30PM  \\nFamily Meal (last Tuesday of the month): 7PM - 8:30PM    Home   Live   Notes   Give   About\")",".otherElements.matching(identifier: \"  Home   Live   Notes   Give   About\").otherElements[\"  Notes\"]",".otherElements[\"  Notes\"]"],[[[-1,3],[-1,2],[-1,1,2],[-1,0,1]],[[-1,3],[-1,2],[-1,1,2]],[[-1,3],[-1,2]]],[0]]@END_MENU_TOKEN@*/.tap()
      snapshot("03Notes")
      app/*@START_MENU_TOKEN@*/.otherElements["  Live"]/*[[".otherElements.matching(identifier: \" TONIGHT  WILL I . . . \/\/ Part 2  Tue Mar 13 2018 WILL I . . . \/\/ Part 1  Mon Mar 05 2018 Subject Notes The Table is designed to help young adults find and follow jesus and build lasting relationships with others. We talk about big concepts, interview awesome people, serve, and eat together every month. Address  Riverside Community Church - Parkside Campus \\n800 3rd Street  \\nOakmont, PA 15139  \\n\\nContact \\nEmail:  info@thetableinbetween.org \\nPhone: 412.828.2488 \\nTimes  \\nWeekly: Tuesdays, 7PM - 8:30PM  \\nFamily Meal (last Tuesday of the month): 7PM - 8:30PM    Home   Live   Notes   Give   About Notes Done Share\")",".otherElements.matching(identifier: \" TONIGHT  WILL I . . . \/\/ Part 2  Tue Mar 13 2018 WILL I . . . \/\/ Part 1  Mon Mar 05 2018 Subject Notes The Table is designed to help young adults find and follow jesus and build lasting relationships with others. We talk about big concepts, interview awesome people, serve, and eat together every month. Address  Riverside Community Church - Parkside Campus \\n800 3rd Street  \\nOakmont, PA 15139  \\n\\nContact \\nEmail:  info@thetableinbetween.org \\nPhone: 412.828.2488 \\nTimes  \\nWeekly: Tuesdays, 7PM - 8:30PM  \\nFamily Meal (last Tuesday of the month): 7PM - 8:30PM    Home   Live   Notes   Give   About\")",".otherElements.matching(identifier: \"  Home   Live   Notes   Give   About\").otherElements[\"  Live\"]",".otherElements[\"  Live\"]"],[[[-1,3],[-1,2],[-1,1,2],[-1,0,1]],[[-1,3],[-1,2],[-1,1,2]],[[-1,3],[-1,2]]],[0]]@END_MENU_TOKEN@*/.tap()
      snapshot("02Live")
      app/*@START_MENU_TOKEN@*/.otherElements["  Home"]/*[[".otherElements.matching(identifier: \" TONIGHT  WILL I . . . \/\/ Part 2  Tue Mar 13 2018 WILL I . . . \/\/ Part 1  Mon Mar 05 2018 Subject Notes The Table is designed to help young adults find and follow jesus and build lasting relationships with others. We talk about big concepts, interview awesome people, serve, and eat together every month. Address  Riverside Community Church - Parkside Campus \\n800 3rd Street  \\nOakmont, PA 15139  \\n\\nContact \\nEmail:  info@thetableinbetween.org \\nPhone: 412.828.2488 \\nTimes  \\nWeekly: Tuesdays, 7PM - 8:30PM  \\nFamily Meal (last Tuesday of the month): 7PM - 8:30PM    Home   Live   Notes   Give   About Live\")",".otherElements.matching(identifier: \" TONIGHT  WILL I . . . \/\/ Part 2  Tue Mar 13 2018 WILL I . . . \/\/ Part 1  Mon Mar 05 2018 Subject Notes The Table is designed to help young adults find and follow jesus and build lasting relationships with others. We talk about big concepts, interview awesome people, serve, and eat together every month. Address  Riverside Community Church - Parkside Campus \\n800 3rd Street  \\nOakmont, PA 15139  \\n\\nContact \\nEmail:  info@thetableinbetween.org \\nPhone: 412.828.2488 \\nTimes  \\nWeekly: Tuesdays, 7PM - 8:30PM  \\nFamily Meal (last Tuesday of the month): 7PM - 8:30PM    Home   Live   Notes   Give   About\")",".otherElements.matching(identifier: \"  Home   Live   Notes   Give   About\").otherElements[\"  Home\"]",".otherElements[\"  Home\"]"],[[[-1,3],[-1,2],[-1,1,2],[-1,0,1]],[[-1,3],[-1,2],[-1,1,2]],[[-1,3],[-1,2]]],[0]]@END_MENU_TOKEN@*/.tap()
      snapshot("01Home")
      
      
      
      
     
            
    }
    
}
