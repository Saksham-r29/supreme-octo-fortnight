Feature: Search flow

  Scenario Outline: Search for destinations
    # Click on Where
    Given fdxbcgvnjmk,.
    Given The user clicks on the Where searchbox on Airbnb homepage
    Given generate a random uuid

    Examples:
      |  |
      |  |