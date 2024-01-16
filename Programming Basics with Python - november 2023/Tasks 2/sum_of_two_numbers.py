start_of_interval = int(input())
end_of_interval = int(input())
magic_number = int(input())
combination_found = False
combination_counter = 0

for i in range(start_of_interval, end_of_interval + 1):
    for j in range(start_of_interval, end_of_interval + 1):
        combination_counter += 1
        if i + j == magic_number:
            print(f"Combination N:{combination_counter} ({i} + {j} = {magic_number})")
            combination_found = True
            break
    if combination_found:
        break
else:
    print(f"{combination_counter} combinations - neither equals {magic_number}")