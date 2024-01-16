from math import floor
most_strong_word = 0
most_strong = ""

while True:
    command = input()
    if command == "End of words":
        break

    asci_sum = 0
    for index in command:
        asci_sum += ord(index)

    if command[0].lower() in "aeiouy":
        asci_sum *= len(command)
    else:
        asci_sum /= floor(len(command))

    if asci_sum > most_strong_word:
        most_strong = command
        most_strong_word = asci_sum


print(f"The most powerful word is {most_strong} - {most_strong_word}")