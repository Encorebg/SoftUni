money_needed_for_holiday = float(input())
money_in_hand = float(input())
spend_counter = 0
total_counter = 0
save_fail = False
while money_needed_for_holiday > money_in_hand:
    action = input()
    money = float(input())
    total_counter += 1

    if action == "spend":
        spend_counter += 1
        if spend_counter == 5:
            save_fail = True
            break
        money_in_hand -= money
        if money_in_hand < 0:
            money_in_hand = 0
    else:
        spend_counter = 0
        money_in_hand += money

if save_fail:
    print("You can't save the money.")
    print(f'{total_counter}')
else:
    print(f"You saved the money for {total_counter} days.")
