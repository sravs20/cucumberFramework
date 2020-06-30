
Feature: Select Cars

  @Regression
  Scenario: Select Cars
    Given I am on page "https://checkout.pod-point.com/"
    When I select make as "Mitsubishi" and model as "Outlander" in the Select Your Car fields
    And I check the checkbox "I am NOT eligible to claim the dealership discount"
    And I select the "Universal Socket" option under Select your connection type
    Then I check the prices for the "7kw" unit displayed under Select your power rating match Full Price – "£879.00"
    And I check the prices for the "7kw" unit displayed under Select your power rating match With OLEV Grant - "£529.00"
    And I check that "6" compatible extras are shown
    When I select a random compatible extra
    Then I ensure that the total price at the bottom right of the screen correctly matches the "7kw" unit price plus the compatible extra price
