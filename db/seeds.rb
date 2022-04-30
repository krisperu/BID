# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Clearing data..."
User.destroy_all
List.destroy_all
Dream.destroy_all
Detail.destroy_all
Memory.destroy_all

puts "🌱 Seeding Users..."
User.create(
    username:'admin',
    email:'test@mail.com',
    password:'pass',
    name:'Admin Administrator',
    image:'https://images.pexels.com/photos/1624076/pexels-photo-1624076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio:'Test',
    admin: true
)

User.create(
    username:'user',
    email:'test1@mail.com',
    password:'pass',
    name:'User',
    image:'https://images.pexels.com/photos/131894/pexels-photo-131894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio:'Test',
    admin: false
)

puts "🌱 Seeding Lists..."
List.create(
    title:'Travel',
    user_id: User.ids.sample
)

List.create(
    title:'Learn',
    user_id: User.ids.sample
)

List.create(
    title:'Summer',
    user_id: User.ids.sample
)

puts "🌱 Seeding Dreams..."
Dream.create(
    dream:'Go to Greece',
    category:'Travel',
    status: true,
    due: '2022-05-04T09:07:00.000Z',
    list_id: List.ids.sample
)

Dream.create(
    dream:'See the Pyramids',
    category:'Travel',
    status: false,
    due: '2022-05-05T09:07:00.000Z',
    list_id: List.ids.sample
)

Dream.create(
    dream:'Learn Photography',
    category:'Learn',
    status: true,
    due: '2022-05-06T09:07:00.000Z',
    list_id: List.ids.sample
)

Dream.create(
    dream:'Go on a trip out of state',
    category:'Summer',
    status: false,
    due: '2022-05-07T09:07:00.000Z',
    list_id: List.ids.sample
)

Dream.create(
    dream:'Have a bonfire',
    category:'Summer',
    status: true,
    due: '2022-05-08T09:07:00.000Z',
    list_id: List.ids.sample
)

Dream.create(
    dream:'Go to India',
    category:'Travel',
    status: false,
    due: '2022-05-09T09:07:00.000Z',
    list_id: List.ids.sample
)

puts "🌱 Seeding Details..."
Detail.create(
    details: 'Test 1',
    image: 'https://picsum.photos/200/300?grayscale',
    dream_id: Dream.ids.sample
)

Detail.create(
    details: 'Test 2',
    image: 'https://picsum.photos/200/300?grayscale',
    dream_id: Dream.ids.sample
)

Detail.create(
    details: 'Test 3',
    image: 'https://picsum.photos/200/300?grayscale',
    dream_id: Dream.ids.sample
)

Detail.create(
    details: 'Test 4',
    image: 'https://picsum.photos/200/300?grayscale',
    dream_id: Dream.ids.sample
)

Detail.create(
    details: 'Test 5',
    image: 'https://picsum.photos/200/300?grayscale',
    dream_id: Dream.ids.sample
)

puts "🌱 Seeding Memories..."
Memory.create(
    title: 'Test 1',
    desc: 'Test 1',
    img_one: 'Test Img 1',
    img_two: 'Test Img 2',
    img_three: 'Test Img 3',
    rating: rand(1..5),
    user_id: User.ids.sample,
    dream_id: Dream.ids.sample
)

Memory.create(
    title: 'Test 2',
    desc: 'Test 2',
    img_one: 'Test Img 1',
    img_two: 'Test Img 2',
    img_three: 'Test Img 3',
    rating: rand(1..5),
    user_id: User.ids.sample,
    dream_id: Dream.ids.sample
)

Memory.create(
    title: 'Test 3',
    desc: 'Test 3',
    img_one: 'Test Img 1',
    img_two: 'Test Img 2',
    img_three: 'Test Img 3',
    rating: rand(1..5),
    user_id: User.ids.sample,
    dream_id: Dream.ids.sample
)

p "Created #{User.count} users"
p "Created #{List.count} lists"
p "Created #{Dream.count} dreams"
p "Created #{Detail.count} details"