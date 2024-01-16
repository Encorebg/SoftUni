number_of_tabs = int(input())
salary = int(input())
fine = 0
for _ in range(number_of_tabs):
    tab = input()
    if tab == "Facebook":
        fine += 150
    elif tab == "Instagram":
        fine += 100
    elif tab == "Reddit":
        fine += 50
    if fine >= salary:
        print("You have lost your salary.")
        break

if salary > fine:
    salary_left = salary - fine
    print(salary_left)
