voucher_value = int(input())
stocks = 0
tickets = 0
while True:
    command = input()

    if command == "End":
        break

    length = len(command)

    if length <= 8:
        price = ord(command[0])
        if voucher_value >= price:
            voucher_value -= price
            stocks += 1
        else:
            break
    else:
        price = ord(command[0]) + ord(command[1])
        if voucher_value >= price:
            voucher_value -= price
            tickets += 1
        else:
            break




print(tickets)
print(stocks)