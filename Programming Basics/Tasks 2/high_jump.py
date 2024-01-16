height = int(input())
bar_height = height - 30
failed_attempts = 0
total_attempts = 0
failed = False
while True:
    ivanov_jump = int(input())
    total_attempts += 1
    if ivanov_jump > bar_height:
        if bar_height >= height:
            break
        bar_height += 5
        failed_attempts = 0
    else:
        failed_attempts += 1
        if failed_attempts == 3:
            failed = True
            break

if failed:
    print(f"Tihomir failed at {bar_height}cm after {total_attempts} jumps.")
else:
    print(f"Tihomir succeeded, he jumped over {bar_height}cm after {total_attempts} jumps.")