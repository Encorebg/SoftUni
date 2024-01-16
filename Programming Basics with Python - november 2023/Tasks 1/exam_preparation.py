number_of_bad_grades = int(input())
name_of_task = input()
evaluation = int(input())
bad_grades_counter = 0
task_counter = 0
evaluation_total = 0

while name_of_task != "Enough":
    if evaluation <= 4:
        bad_grades_counter += 1
        if bad_grades_counter == number_of_bad_grades:
            break

    evaluation_total += evaluation
    task_counter += 1
    last_task = name_of_task
    name_of_task = input()
    if name_of_task != "Enough":
        evaluation = int(input())

if bad_grades_counter == number_of_bad_grades:
    print(f"You need a break, {bad_grades_counter} poor grades.")
else:
    average_score = evaluation_total / task_counter
    print(f"Average score: {average_score:.2f}")
    print(f"Number of problems: {task_counter}")
    print(f"Last problem: {last_task}")


