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
      XCUIDevice.shared().orientation = .portrait
      
      let app = XCUIApplication()
      let tabBarsQuery = app.tabBars
      tabBarsQuery.buttons["Home"].tap()
      snapshot("01Home")
      tabBarsQuery.buttons["Videos"].tap()
      snapshot("02Videos")
      app.tabBars.buttons["Notes"].tap()
      snapshot("03Notes")
      app.tabBars.buttons["About"].tap()
      snapshot("04About")
      app.otherElements["  Times We Meet Where We Meet Who We Are  Officially launching on September 6, 2014, The Table is a ministry of Riverside Community Church geared towards young adults. The Table is designed to offer an atmosphere where questions, doubt, and truth can be expressed in relation to one’s spiritual journey toward God. It’s a place of community where people can get invested in each other’s lives and grow in relationship with God in the process.  Whether you find yourself in a classroom, office, or home during the week, non-believing, believing or indifferent, come to The Table to wrestle with life’s biggest questions while joining others of like mind and life stage. Our weekly meeting times will include coffee and discussion, and we will be eating a full meal together once a month. \nOur Mission\n The Mission of The Table is to help young adults find and follow Jesus. "].buttons["Where We Meet"].tap()
        snapshot("05Where")
      app.otherElements["  Times We Meet Where We Meet Who We Are  Address  Riverside Community Church - Parkside Campus \n800 3rd Street  \nOakmont, PA 15139  \n\nContact \nEmail:   info@thetableinbetween.org \nPhone:  412.828.2488"].buttons["Times We Meet"].tap()
      snapshot("06Times")
      
    }
    
}
