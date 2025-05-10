from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from firebase_admin import credentials, firestore
import firebase_admin
from firebase_admin import db  





cred = credentials.Certificate('zeepo-serviceaccount.json')  
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://zeepo-d3f93-default-rtdb.firebaseio.com/'

})


ref = db.reference('/')  




trending_courses_data = {
    "Web Development": [
        {"title": "Learn React", "description": "Master React in 30 days", "level": "Beginner", "duration": "30 hours"},
        {"title": "Advanced JavaScript", "description": "Deep dive into JavaScript", "level": "Intermediate", "duration": "40 hours"},
        {"title": "Vue.js for Beginners", "description": "Introduction to Vue.js", "level": "Beginner", "duration": "35 hours"},
        {"title": "Node.js & Express", "description": "Learn server-side development with Node.js and Express", "level": "Intermediate", "duration": "50 hours"},
        {"title": "Introduction to HTML & CSS", "description": "Learn the basics of HTML and CSS", "level": "Beginner", "duration": "25 hours"},
        {"title": "Advanced CSS", "description": "Master CSS techniques", "level": "Intermediate", "duration": "35 hours"},
        {"title": "Responsive Web Design", "description": "Create websites that work on all screen sizes", "level": "Intermediate", "duration": "40 hours"},
        {"title": "JavaScript for Beginners", "description": "Start programming with JavaScript", "level": "Beginner", "duration": "30 hours"},
        {"title": "Angular for Web Development", "description": "Master Angular framework for web development", "level": "Intermediate", "duration": "45 hours"},
        {"title": "Web Development Bootcamp", "description": "Full stack web development with modern technologies", "level": "Intermediate", "duration": "100 hours"},
    ],
    "Data Science": [
        {"title": "Introduction to Data Science", "description": "Learn Data Science fundamentals", "level": "Beginner", "duration": "50 hours"},
        {"title": "Machine Learning with Python", "description": "Implement machine learning algorithms in Python", "level": "Advanced", "duration": "60 hours"},
        {"title": "Deep Learning with TensorFlow", "description": "Master deep learning using TensorFlow", "level": "Advanced", "duration": "70 hours"},
        {"title": "Data Visualization with Python", "description": "Learn how to visualize data using Python libraries", "level": "Intermediate", "duration": "40 hours"},
        {"title": "Introduction to Pandas", "description": "Learn data manipulation with Pandas library", "level": "Beginner", "duration": "30 hours"},
        {"title": "SQL for Data Science", "description": "Learn SQL basics for data science", "level": "Beginner", "duration": "25 hours"},
        {"title": "Time Series Analysis", "description": "Analyze time-series data with Python", "level": "Intermediate", "duration": "50 hours"},
        {"title": "Big Data with Hadoop", "description": "Learn to process big data using Hadoop", "level": "Advanced", "duration": "60 hours"},
        {"title": "Artificial Intelligence with Python", "description": "Learn AI concepts and implement them in Python", "level": "Advanced", "duration": "70 hours"},
        {"title": "Data Science Project", "description": "Build your first data science project", "level": "Intermediate", "duration": "80 hours"},
    ],
    "Mobile Development": [
        {"title": "Flutter for Beginners", "description": "Create cross-platform apps with Flutter", "level": "Beginner", "duration": "45 hours"},
        {"title": "Android Development with Kotlin", "description": "Develop Android apps using Kotlin", "level": "Intermediate", "duration": "50 hours"},
        {"title": "iOS Development with Swift", "description": "Learn iOS app development using Swift", "level": "Beginner", "duration": "60 hours"},
        {"title": "React Native for Mobile Development", "description": "Learn to build mobile apps using React Native", "level": "Intermediate", "duration": "55 hours"},
        {"title": "Building Android Apps with Java", "description": "Develop Android apps using Java", "level": "Beginner", "duration": "50 hours"},
        {"title": "Advanced Flutter", "description": "Master Flutter for mobile development", "level": "Advanced", "duration": "60 hours"},
        {"title": "Mobile App UI/UX Design", "description": "Learn to design user-friendly mobile app interfaces", "level": "Beginner", "duration": "40 hours"},
        {"title": "Xamarin for Mobile Development", "description": "Learn to build cross-platform mobile apps with Xamarin", "level": "Intermediate", "duration": "50 hours"},
    ],
}

ongoing_courses_data = {
    "Active": [
        {"title": "Advanced Web Development", "description": "Build full-stack apps with modern technologies", "level": "Advanced", "duration": "80 hours", "status": "Ongoing"},
        {"title": "Data Science with Python", "description": "Implement Python for data science", "level": "Intermediate", "duration": "60 hours", "status": "Ongoing"},
    ],
    "Completed": [
        {"title": "Introduction to Machine Learning", "description": "Understand the basics of machine learning", "level": "Beginner", "duration": "40 hours", "status": "Completed"},
        {"title": "Intro to JavaScript", "description": "Learn the fundamentals of JavaScript", "level": "Beginner", "duration": "30 hours", "status": "Completed"},
    ],
}

skills_courses_data = {
    "Programming": [
        {"title": "Python for Beginners", "description": "Start with Python from scratch", "level": "Beginner", "duration": "20 hours"},
        {"title": "Kotlin for Android", "description": "Learn Kotlin for building Android apps", "level": "Intermediate", "duration": "30 hours"},
        {"title": "C++ for Beginners", "description": "Learn the fundamentals of C++ programming", "level": "Beginner", "duration": "25 hours"},
        {"title": "Advanced Java Programming", "description": "Learn advanced topics in Java", "level": "Advanced", "duration": "50 hours"},
        {"title": "JavaScript for Beginners", "description": "Learn JavaScript fundamentals", "level": "Beginner", "duration": "30 hours"},
        {"title": "Mastering Python", "description": "Advanced Python programming techniques", "level": "Advanced", "duration": "60 hours"},
        {"title": "C# Programming for Beginners", "description": "Start programming with C#", "level": "Beginner", "duration": "40 hours"},
        {"title": "Go Programming", "description": "Learn Go programming for backend development", "level": "Intermediate", "duration": "50 hours"},
        {"title": "Rust Programming", "description": "Learn system-level programming with Rust", "level": "Advanced", "duration": "60 hours"},
        {"title": "Ruby on Rails for Beginners", "description": "Learn backend development with Ruby on Rails", "level": "Intermediate", "duration": "40 hours"},
    ],
    "Design": [
        {"title": "UI/UX Design Basics", "description": "Introduction to UI/UX Design", "level": "Beginner", "duration": "25 hours"},
        {"title": "Advanced Graphic Design", "description": "Advanced techniques in Graphic Design", "level": "Advanced", "duration": "45 hours"},
        {"title": "Introduction to Web Design", "description": "Learn the fundamentals of web design", "level": "Beginner", "duration": "30 hours"},
        {"title": "Logo Design and Branding", "description": "Create impactful logos and branding elements", "level": "Intermediate", "duration": "40 hours"},
        {"title": "Adobe Photoshop for Beginners", "description": "Learn the basics of Photoshop", "level": "Beginner", "duration": "40 hours"},
        {"title": "Illustrator for Graphic Design", "description": "Learn vector-based graphic design with Illustrator", "level": "Intermediate", "duration": "50 hours"},
        {"title": "3D Design and Animation", "description": "Learn to create 3D models and animations", "level": "Advanced", "duration": "60 hours"},
        {"title": "Sketch for UI/UX Design", "description": "Learn Sketch for creating user interfaces", "level": "Intermediate", "duration": "40 hours"},
        {"title": "Web Graphics with Figma", "description": "Design web interfaces and graphics with Figma", "level": "Beginner", "duration": "35 hours"},
        {"title": "Motion Graphics with After Effects", "description": "Create motion graphics with After Effects", "level": "Advanced", "duration": "50 hours"},
    ],
    "Marketing": [
        {"title": "Digital Marketing Fundamentals", "description": "Learn the basics of digital marketing", "level": "Beginner", "duration": "35 hours"},
        {"title": "SEO for Beginners", "description": "Introduction to search engine optimization", "level": "Beginner", "duration": "25 hours"},
        {"title": "Social Media Marketing", "description": "Master social media platforms for marketing", "level": "Intermediate", "duration": "30 hours"},
        {"title": "Email Marketing", "description": "Learn how to create effective email campaigns", "level": "Beginner", "duration": "25 hours"},
        {"title": "Content Marketing", "description": "Master content strategy and distribution", "level": "Intermediate", "duration": "40 hours"},
        {"title": "PPC Advertising for Beginners", "description": "Introduction to Pay-Per-Click advertising", "level": "Beginner", "duration": "30 hours"},
        {"title": "Branding and Strategy", "description": "Learn how to build a strong brand identity", "level": "Intermediate", "duration": "40 hours"},
        {"title": "Google Ads Certification", "description": "Get certified in Google Ads", "level": "Intermediate", "duration": "50 hours"},
    ],
    "Business": [
        {"title": "Entrepreneurship 101", "description": "Learn the basics of entrepreneurship", "level": "Beginner", "duration": "40 hours"},
        {"title": "Leadership and Management", "description": "Become an effective leader and manager", "level": "Intermediate", "duration": "50 hours"},
        {"title": "Financial Accounting for Beginners", "description": "Introduction to financial accounting principles", "level": "Beginner", "duration": "30 hours"},
        {"title": "Project Management for Beginners", "description": "Learn the basics of project management", "level": "Beginner", "duration": "35 hours"},
        {"title": "Business Strategy and Planning", "description": "Learn how to create a business strategy", "level": "Intermediate", "duration": "45 hours"},
        {"title": "Human Resources Management", "description": "Master HR management practices", "level": "Intermediate", "duration": "50 hours"},
        {"title": "Corporate Finance for Beginners", "description": "Introduction to corporate finance", "level": "Beginner", "duration": "40 hours"},
        {"title": "Business Analytics", "description": "Learn how to use data for business decision making", "level": "Intermediate", "duration": "50 hours"},
    ],
}

def trending_courses(request):



    ref = db.reference('trending_skills')  
    data = ref.get()  

    print(data)  

    return JsonResponse(data)

def skills_courses(request):
    return JsonResponse(skills_courses_data)

def hello(request):
        
        ref = db.reference('trending_skills')  
        data = ref.get()
        trending_courses_data=data 
        print(data) 

        if data:
            first_key = next(iter(data))  # gets the first key (node name)
            print("First Node Name:", first_key)
        else:
            print("No data found")
        return JsonResponse({"message": "Hello, world!"})


def ongoing_courses(request):
    return JsonResponse(ongoing_courses_data)



@csrf_exempt
def upload_instructor2(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data
            data = json.loads(request.body)

            
            title = data.get('title')
            description = data.get('description')
            level = data.get('level')
            duration = data.get('duration')
            category = data.get('category')
            price = data.get('price')

            
            print(f"Title: {title}")
            print(f"Description: {description}")
            print(f"Level: {level}")
            print(f"Duration: {duration}")
            print(f"Category: {category}")
            print(f"Price: {price}")

            
            data_to_store = {
                "title": title,
                "description": description,
                "level": level,
                "duration": duration,
                "price": price,

            }

            
            ref = db.reference(f'trending_skills/{category}')

            
            existing_data = ref.get()

            if existing_data is None:
                
                ref.set([data_to_store])
            else:
                
                existing_data.append(data_to_store)
                ref.set(existing_data)

            
            fetched_data = ref.get()
            print(f"Fetched data: {fetched_data}")

            
            return JsonResponse({'status': 'success', 'data': fetched_data})

        except Exception as e:
            print(f"Error: {e}")
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


            
            fetched_data = new_course_ref.get()
            if fetched_data:
                print("Fetched data from Realtime Database:")
                print(fetched_data)
            else:
                print("Failed to fetch the data that was just added.")

            return JsonResponse({'message': 'Instructor data received and fetched successfully!'}, status=200)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    else:
        return JsonResponse({'error': 'Only POST method allowed'}, status=405)
