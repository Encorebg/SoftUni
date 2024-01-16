number = int(input())
counter = 0
all_is_printed = False
for rows in range(1, number + 1):
    for columns in range(1, rows + 1):
        counter += 1
        if counter > number:
            all_is_printed = True
            break

        print(counter, end=" ")
    if all_is_printed:
        break
    print()

