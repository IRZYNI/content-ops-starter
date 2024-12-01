---
type: PageLayout
title: This is a new page
sections:
  - type: FeaturedItemsSection
    title:
      type: TitleBlock
      text: signing up
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: ''
    items: []
    actions:
      - type: Button
        label: Apply now
        url: /
        icon: arrowRight
        iconPosition: right
        style: primary
    variant: toggle-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-40
          - pt-16
          - pl-3
          - pr-3
        justifyContent: center
      subtitle:
        textAlign: center
    elementId: >-
      <!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta
      name="viewport" content="width=device-width, initial-scale=1.0">   
      <title>Sign Up</title></head><body>    <h2>Sign Up</h2>    <form
      name="signup" method="POST" data-netlify="true">        <label
      for="username">Username:</label>        <input type="text" id="username"
      name="username" required><br>        <label
      for="email">Email:</label>        <input type="email" id="email"
      name="email" required><br>        <label
      for="password">Password:</label>        <input type="password"
      id="password" name="password" required><br>        <button
      type="submit">Sign Up</button>    </form></body></html>
slug: sign-up
isDraft: false
seo:
  type: Seo
  metaTitle: Landing Page
  metaDescription: Write here your new page's description including most relevant keywords.
  addTitleSuffix: true
  socialImage: /images/main-hero.jpg
  metaTags: []
---
