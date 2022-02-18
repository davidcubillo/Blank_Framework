Feature: End to End ecommerse Validation


    Feature Description
    @Regression
    Scenario: Ecommerse products delivery
    Given I open the Landing page
    When I add items to cart
    And Validate the total prices
    Then select the country submit and verify thankyou
    
    @Smoke
    Scenario: Filling the form to shop
    Given I open the Landing page
    When I fill the form details
    |name | gender |
    |bobz | Male   |
    Then validate the form
    And select the shop page 
    