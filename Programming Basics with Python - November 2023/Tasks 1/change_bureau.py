number_of_bitcoins = int(input())
number_of_iuans = float(input())
comission = float(input())

one_bitcoin_leva = 1168
one_iuan_dollars = 0.15
one_dolar_leva = 1.76
one_euro_leva = 1.95

bitcoin_to_leva = number_of_bitcoins * one_bitcoin_leva
iuan_to_dollars = one_iuan_dollars * number_of_iuans
iuan_to_leva = iuan_to_dollars * one_dolar_leva

total_money_leva = bitcoin_to_leva + iuan_to_leva
total_money_euro = total_money_leva / 1.95
total_money_euro = total_money_euro - total_money_euro * comission / 100

print(f'{total_money_euro:.2f}')