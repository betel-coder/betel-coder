name = input("Student's name: ")

# Helper function to get a valid mark between 0 and 100
def get_valid_mark(subject_name):
    while True:
        try:
            score = float(input(f"Enter {subject_name} mark: "))
            if 0 <= score <= 100:
                return score
            else:
                print("Try again")
        except ValueError:
            print("Try again")

# Get validated marks for each subject
maths = get_valid_mark("maths")
science = get_valid_mark("science")
english = get_valid_mark("english")

# Calculate average
average_mark = (maths + science + english) / 3
print(f"\nThe average mark is: {average_mark:.2f}")

# Determine Grade
if average_mark >= 80:
    print("Grade: A")
    print("Pass")
elif average_mark >= 70:
    print("Grade: B")
    print("Pass")
elif average_mark >= 60:
    print("Grade: C")
    print("Pass")
elif average_mark >= 50:
    print("Grade: D")
    print("Pass")
else:
    print("Grade: F")
    print("Fail")