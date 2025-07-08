# kkoisland-react-cms

## Overview

I wrote a personal blog for over 20 years, but since I stopped updating it, I decided to preserve it as a record.

Because the blog contained many images, I created a layout where images can be browsed at a glance.

The original content was written in Shift-JIS, so I converted everything to UTF-8. The conversion tools didn’t work well, so I ended up writing Perl scripts to handle all the encoding conversion myself.

## Repository

```bash
git clone git@github.com:kkoisland/kkoisland-react-cms.git
cd kkoisland-react-cms
npm install
npm start
# After setup: http://localhost:3000/
```

## Setup

```bash
npx create-react-app kkoisland-react-cms --template typescript
npm install --save-dev eslint prettier
# add .prettierrc.json & .vsCode/settings.json for auto-save
npm install react-router-dom @types/react-router-dom
npm install sass
npm install @fortawesome/react-fontawesome // Icons: Github, Twitter, LinkedIn
npm install @fortawesome/fontawesome-svg-core // Icons: Github, Twitter, LinkedIn
npm install @fortawesome/free-brands-svg-icons // Icons: Github, Twitter, LinkedIn
```

## Tech Stack

- React (Create React App + TypeScript)
- React Router
- SCSS
- Font Awesome (Social icons)
- Article metadata managed via JSON
- Reuse of HTML content (with encoding conversion)
- Perl scripts (convert_encoding.pl, extract.pl)

## Project Structure

```bash
src/
  |- data/
  |   |- data.json
  |
  |- components/ (UIの一部を構成する再利用可能な部品)
  |   |- index.ts
  |   |- Header/
  |   |   |- Header.tsx
  |   |   |- Header.scss
  |   |- Footer/
  |   |   |- Footer.tsx
  |   |   |- Footer.scss
  |   |- YearList/
  |   |   |- YearList.tsx
  |   |   |- YearList.scss
  |   |- BlogDetail/
  |   |   |- BlogDetail.tsx
  |   |   |- BlogDetail.scss
  |
  |- containers/ (ビジネスロジックを管理)
  |   |- index.ts
  |   |- Main/
  |   |   |- Main.tsx
  |   |   |- Main.scss
  |
  |- hooks/ (if necessary)
  |   |- useCustomHook1.ts
  |   |- useCustomHook2.ts
  |
  |- models/ (if necessary)
  |   |- Model1.ts
  |   |- Model2.ts
  |
  |- styles/
  |   |- global.scss (全体共通のスタイル)
  |   |- utils/
  |   |   |- utils.scss
  |
  |- index.tsx
  |- index.scss
  |- App.tsx
  |- App.scss
  |
 scripts/
  |- convert_encoding.pl

src/contents/Blog/{year}/{month}/{date}/index.rss
src/contents/Blog/{year}/{month}/{date}/index.html
src/contents/Bimages/{year}/xxx.jpg
```

## Example data.json

```json
[
  {
    "title": "Holiday in San Jose",
    "date": "2018-04-01",
    "image": "2018/sanjose.jpg",
    "path": "/contents/Blog/2018/04/01/index.html"
  }
]
```

## Planned Features

- Search
- Export logs as CSV
- Responsive design

## Completed Tasks

- Created routing / Header / Footer / Main / YearList / BlogDetail
- Defined routes for YearList
- Fixed character encoding issues
- Separated article metadata into JSON
- Defined global CSS styles
- Implemented image / no-image fallback
- Implemented convert.pl / extract.pl

## Design Details

- Purpose
- Target users
- Features
- Design
- Operations
- Data structure
- Layout
- Output/Input
- Error handling

## Style Guidelines

- Using SCSS
- Custom variables defined in global.scss
- Place SCSS files in the same folder as each component

## React Entry Point

```html
<!-- For createRoot() in index.tsx -->
<div id="root"></div>
```

## HTML Encoding Conversion

- Legacy HTML assets were not UTF-8 encoded.
- Since bulk iconv conversion was not feasible, all files were converted manually using a Perl script.
