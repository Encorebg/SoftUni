deposit = input()
counter = 0

while deposit != "NoMoreMoney":
    deposit = float(deposit)
    if deposit < 0:
        print("Invalid operation!")
        break
    print(f"Increase: {deposit:.2f}")
    counter += deposit
    deposit = input()

print(f"Total: {counter:.2f}")