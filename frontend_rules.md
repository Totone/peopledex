You are an expert in TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI, and Tailwind.

## Project description

You are building a web app which goal is to store data about people you met at conferences, meetups, etc.
Like a Pokedex for humans.
You can add a new person, edit their data, delete them.
You also can add notes to a person.

## Project architecture

Code is inside a "src" folder.

src/
│
├── app/ # Contient les pages de l'application (Next.js)
│ ├── page.tsx # Page d'accueil
│ ├── search/ #
│ │ └── page.tsx # Page de recherche
│ ├── add-person/ # Page d'ajout d'une personne
│ │ └── page.tsx #
│ └── person-details/
│ └── [id]/
│ └── page.tsx # Page d'affichage des détails d'une personne via son id
│
├── core/ # Contient la logique métier et applicative
│ ├── use-cases/ # Contient les use-cases (logique métier)
│ ├── entities/ # Contient les entités de ton domaine
│ └── repositories/ # Interfaces des repositories
│
├── infrastructure/ # Contient l'implémentation des repositories et services externes
│
└── ui/ # Contient les composants frontend et la logique UI
├── actions/ # Server actions (logique exécutée sur le serveur)
├── components/ # Composants UI réutilisables
├── hooks/ # Custom hooks
├── presenters/ # Présentateurs pour transformer les données en types UI
└── styles/ # Contient les styles de l'application
└── globals.css # Styles globaux

## Code conventions

- use typescript for all code; prefer types over interfaces
- avoid enums; use literal types instead
- use arrow functions instead of function declarations
- use const for all variables that are not reassigned
- use let for all variables that are reassigned
- use template literals instead of string concatenation
- use destructuring for object properties and array elements

## Frontend conventions

### Globals

- app has to be responsive
- use mobile first approach
- 3 targets : smartphones, tablets, screens
- use the shadcn/ui components library
- use the tailwind css framework
- use React functional components instead of class components
- avoid React.forwardRef
- use the app router
- use the nextjs server actions
- use PascalCase for components names & for React components files names
- use camelCase for React hooks & server actions
- use kebab-case for all other files
- minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC)
- wrap client components in Suspense with fallback if needed
- use dynamic loading for non-critical components

### Components

- stored in ui/components/[ComponentName]/[ComponentName].tsx
- tests for component stored in ui/components/[ComponentName]/[ComponentName].spec.tsx
- ui/components/[ComponentName]/index.ts exports component stored in ui/components/[ComponentName]/[ComponentName].tsx

#### Specific components

- <MilestoneItem/> : Displays notes added for a person

  - props:
    - id: string
    - type: "auto" | "manual"
    - description: string
    - lastUpdate: string
  - id isn't displayed on comonent view
  - component style depends on "type"
  - description is the main section for the component
  - lastUpdate is shown as a secondary data, at a corner

- <ChannelItem/> : Displays a person's contact point

  - props:
    - id: string
    - type: "phone" | "email" | "social"
    - label: string
    - value: string
  - id isn't displayed on component viex
  - an icon is displayed on left depending on "type" value
  - label is shown
  - value is not shown. It is displayed on component hover & copied to clipboard on component click

- <LightPeopleData/> : Displays data about a person stored in DB
  - props:
    - id: string
    - name: string
    - nicknames: string[]
    - gender: string
    - relation: string
  - id, gender & relation aren't displayed on component view
  - name is the main section of the component
  - nicknames are written & separated by ',' at the bottom of the component

### Server actions

- stored in ui/actions/
- one file per server action
- server actions list:
  - addMilestone
  - addPerson
  - getMilestoneHistory
  - findPersonWithId
  - listPeople
  - removeMilestone
  - removePerson
  - updatePerson

### Pages

- There are 4 pages :
  - / : Home page
  - /search : Search for a person page
  - /add-person : Add person page
  - /person-details/:id : Person details page
- There is also a layout page : /layout.tsx applied over all pages
  - It contains 2 buttons :
    - /search : Link to search page
    - /add-person : Link to Add person page

#### Home page

A page redirecting to /search

#### Search page

A page presenting :

- a search bar
- the list of people you met (a list of <LightPeopleData/>)
- a button to add a new person, redirecting to /add-person

#### Add person page

A page with a form to add a new person.
Fields:

- firstname: string?
- lastname: string?
- nicknames: string[]?
- gender: string?
- relation: string?

'useActionState' react hook is used to call 'addPerson' server action

#### Person details page

When receiving this page, a server action 'findPersonWithId' is set with corresponding id & page loads once data about user is returned.
Then the page displays details of the given person :

- A first section with :
  - firstname & lastname
  - nicknames (a list of strings)
  - gender (string)
  - relation -string
- Another section with a list of <ChannelItem/>
- A last section with a list of <MilestoneItem/>

### Other

Other stuff like presenters, hooks, utils,.. will be discussed later.
