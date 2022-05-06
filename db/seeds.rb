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
    title: 'Memory 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img_one: 'https://picsum.photos/200/300',
    img_two: 'https://picsum.photos/3000/1500',
    img_three: 'https://picsum.photos/3000/1750',
    rating: rand(1..5),
    user_id: User.ids.sample,
    dream_id: Dream.ids.sample
)

Memory.create(
    title: 'Memory 2',
    desc: 'Amet consectetur adipiscing elit ut aliquam. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Eget velit aliquet sagittis id consectetur. Vitae justo eget magna fermentum iaculis eu non diam. Bibendum ut tristique et egestas quis. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Rhoncus est pellentesque elit ullamcorper dignissim. Lacus vel facilisis volutpat est velit. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Pretium lectus quam id leo in vitae turpis massa. Ultricies tristique nulla aliquet enim tortor. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Cursus eget nunc scelerisque viverra mauris in aliquam.',
    img_one: 'https://picsum.photos/400/500',
    img_two: 'https://picsum.photos/300/175',
    img_three: 'https://picsum.photos/325/190',
    rating: rand(1..5),
    user_id: User.ids.sample,
    dream_id: Dream.ids.sample
)

Memory.create(
    title: 'Memory 3',
    desc: 'Urna porttitor rhoncus dolor purus non enim. Convallis convallis tellus id interdum velit laoreet id donec. Sit amet venenatis urna cursus eget nunc. Quam elementum pulvinar etiam non quam lacus suspendisse. Massa tincidunt dui ut ornare lectus sit. Nisl tincidunt eget nullam non. Ac felis donec et odio pellentesque diam volutpat. At tellus at urna condimentum mattis pellentesque id. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. At imperdiet dui accumsan sit. Pharetra vel turpis nunc eget. Sagittis id consectetur purus ut faucibus pulvinar elementum. Massa eget egestas purus viverra accumsan in nisl nisi. Tristique risus nec feugiat in fermentum posuere urna. Tristique senectus et netus et. Faucibus et molestie ac feugiat sed.',
    img_one: 'https://picsum.photos/450/550',
    img_two: 'https://picsum.photos/400/250',
    img_three: 'https://picsum.photos/350/200',
    rating: rand(1..5),
    user_id: User.ids.sample,
    dream_id: Dream.ids.sample
)

p "Created #{User.count} users"
p "Created #{List.count} lists"
p "Created #{Dream.count} dreams"
p "Created #{Detail.count} details"