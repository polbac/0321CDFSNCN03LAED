export const SidebarTitle = "Dashboard Planets"
export const SidebarSubtitle = "<SpaceData />"
const API_BASE_URL = 'http://localhost:3000/api'
export const API_PLANETS = `${API_BASE_URL}/planets`
export const API_PLANETS_DETAIL = `${API_BASE_URL}/planets/`

export const PLANETS = [
    {
        "id": 1,
        "image": "mercurio.jpeg",
        "name": "Mercurio",
        "rings": "no"
      },
      {
        "id": 3,
        "name": "Tierra",
        "rings": "yes",
        "image": "tierra.jpeg"
      },
      {
        "id": 4,
        "name": "Marte",
        "rings": "yes",
        "image": "marte.jpeg"
      },
      {
        "id": 5,
        "name": "Jupiter",
        "image": "jupiter.jpeg",
        "rings": "no"
      },
      {
        "id": 6,
        "name": "Saturno",
        "image": "saturno.jpeg",
        "rings": "yes"
      },
      {
        "id": 7,
        "name": "Urano",
        "image": "urano.jpeg",
        "rings": "no"
      },
      {
        "id": 8,
        "name": "Neptuno",
        "image": "neptuno.jpeg",
        "rings": "no"
      },
      {
        "id": 9,
        "name": "Plutón",
        "image": "pluton.png",
        "rings": "no"
      },
]