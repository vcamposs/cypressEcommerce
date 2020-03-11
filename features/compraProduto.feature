Feature: Eu como cliente desejo efetuar a compra de um produto no site da C&A

  Scenario Outline: Efetuar o processo de compra até o carrinho
    Given eu acesso o site da C&A pelo "<device>"
    When eu procuro pelo produto "<nomeDoProduto>"
    And seleciono o produto "<nomeDoProduto>" que foi retornado na lista
    And e eu inicio o processo de compra
    Then o produto "<nomeDoProduto>" está no carrinho
    Examples:
      | device     | nomeDoProduto |
      | celular    | Kindle        |
      | computador | Kindle        |
