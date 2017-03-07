//
//  TheTableUITests.swift
//  TheTableUITests
//
//  Created by Brandon Everett on 3/6/17.
//  Copyright © 2017 Facebook. All rights reserved.
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
      XCUIDevice.shared().orientation = .portrait
      
      let app = XCUIApplication()
      let tabBarsQuery = app.tabBars
      tabBarsQuery.buttons["Home"].tap()
      snapshot("01HomeScreen")
      tabBarsQuery.buttons["Videos"].tap()
      snapshot("02VideosScreen")
      app.tabBars.buttons["About"].tap()
      snapshot("03AboutScreen")
      
    }
    
}
