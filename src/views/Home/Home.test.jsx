import { render, screen } from "@testing-library/react"
import Home from "./Home"


const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const { name, color, motto, likes } = user
  const header = await screen.findByAltText('header')
  const avatar = screen.getByAltText('avatar')
  const profName = screen.getByRole('heading', { name })
  const mottoUser = screen.getByText(motto)
  const favColor = screen.getByText(color)
  const interests = screen.getByRole('heading', { name: /interests/i })
  const likesUser = screen.getByRole('list')

  expect(header).toBeInTheDocument()
  expect(avatar).toBeInTheDocument()
  expect(profName).toBeInTheDocument()
  expect(mottoUser).toBeInTheDocument()
  expect(favColor).toBeInTheDocument()
  expect(interests).toBeInTheDocument()
  
  expect(likesUser.children.length).toEqual(likes.length)

})
