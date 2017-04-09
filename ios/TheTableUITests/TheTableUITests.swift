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
        continueAfterFailure = true
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
      XCUIDevice.shared().orientation = .portrait
      snapshot("01Home")
      app.otherElements["     3P // Part 1  Tue Apr 04 2017    My Side of Iron // Part 3 Tue Mar 21 2017    My Side of Iron // Part 2 Tue Mar 14 2017    My Side of Iron // Part 1 Tue Mar 07 2017    Family Meal  Tue Feb 28 2017    You Can't Teach Hunger / / Part 3  Tue Feb 21 2017    You Can't Teach Hunger / / Part 2  Mon Feb 13 2017     Tue Feb 07 2017    Family Meal  Tue Jan 31 2017    The New Now // Part 4 Tue Jan 24 2017    The New Now // Part 2 Tue Jan 10 2017    The New Now // Part 1 Tue Jan 03 2017    The Table 12/13/16 Tue Dec 13 2016    Person is Personal // Week 2  Tue Dec 13 2016     Tue Dec 06 2016     Tue Nov 29 2016    Where is the love? / / Part 3 Tue Nov 15 2016    Where is the love? / / Part 2  Tue Nov 08 2016     Tue Nov 01 2016     Tue Oct 25 2016"].otherElements["   3P // Part 1  Tue Apr 04 2017"].tap()
      snapshot("02Detail")
      app.tabBars.buttons["Videos"].tap()
      snapshot("03Videos")
      app.tabBars.buttons["Notes"].tap()
      snapshot("04Notes")
      app.tabBars.buttons["About"].tap()
      snapshot("05About")
      
      
    }
    
}
