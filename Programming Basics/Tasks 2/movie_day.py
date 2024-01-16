time_for_pictures = int(input())
time_for_scenes = int(input())
duration_of_scene = int(input())

field_preparation = 0.15 * time_for_pictures
time_for_taking_the_scenes = time_for_scenes * duration_of_scene
total_time = field_preparation + time_for_taking_the_scenes

diff = round(abs(total_time - time_for_pictures))

if time_for_pictures >= total_time:
    print(f"You managed to finish the movie on time! You have {diff} minutes left!")
else:
    print(f"Time is up! To complete the movie you need {diff} minutes.")