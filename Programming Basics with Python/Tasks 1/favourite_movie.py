command = input()
best_movie = ""
best_sum = 0
movie_counter = 0
limit_is_reached = False

while command != "STOP":
    movie_counter += 1
    if movie_counter == 7:
        limit_is_reached = True
        break

    length = len(command)
    asci_sum = 0
    for n in command:

        asci_sum += ord(n)

        if n.islower():
            asci_sum -= length * 2
        elif n.isupper():
            asci_sum -= length

    if asci_sum > best_sum:
        best_sum = asci_sum
        best_movie = command
    command = input()

if limit_is_reached:
    print(f"The limit is reached.")

print(f"The best movie for you is {best_movie} with {best_sum} ASCII sum.")
