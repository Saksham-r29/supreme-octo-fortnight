Feature: Search flow

  Scenario Outline: Search for destinations
    Given fdxbcgvnjmk,.
    # Click on Where searchbox
    Given The user clicks on the Where searchbox on Airbnb homepage
    Given generate a random uuid
    # Click on Where
    When The user clicks on the Where field on Airbnb homepage 1

    Examples:
      |  |
      |  |
