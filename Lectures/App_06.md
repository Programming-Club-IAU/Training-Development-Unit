## Week 7 – 📱 State Management

This week we will build on what we already learned about State, StatefulWidget, and setState(). <br> <br>
We will introduce Page Navigation, show how it relates to state, and then explore the basics of State Management techniques, focusing on Provider.

Last week, we learned about:


- StatefulWidget
- setState()
- And we built the Counter example


This counter project was actually our first example of State Management!
The counter value changed → the UI rebuilt → this is exactly how state works.


However, using only setState() becomes difficult as your app grows because of:
- Too many rebuilds
- Hard to share data between multiple screens
- UI mixed with logic
- Hard to maintain long-term


Because of that, Flutter offers many State Management techniques such as:
- setState() – simplest
- Provider – recommended for beginners and medium-sized apps
- Cubit / Bloc – for large, complex apps
- Riverpod – modern, flexible, and scalable


This week, our main focus will be on Provider.



<br>


## 📚 Resources:

*Friendly reminders 😁:*
- **If the tutorial has intro/outro music, please mute it**
- If the tutorial shows a UI widget you don’t know, just quickly search it (all of them are easy and fun, don’t panic!)

1. Page Navigation
  - [Code2Start - Flutter Navigation and Routing](https://youtube.com/playlist?list=PL3aG1K3LWCrdSez8heDG7Qi3Blh_7fRo1&si=m8SYYgWHJvhWNOqZ)
2. State Management (Provider)
  - Document & basic tutorials:
    - [Flutter Official Documentation - State Management](https://docs.flutter.dev/data-and-backend/state-mgmt/simple)
    - [Mitch Koko - Provider Simple State Management](https://youtu.be/uQuxrZE2dqA?si=wiGLrrqbWx0RWVkj)
    - [Flutter Mapp - Flutter Provider](https://youtu.be/FUDhozpnTUw?si=sJUCBJz8eeNqEncN)
  - Using provider for theming (Example):
    - [Mitch Koko - Light & Dark Theme](https://youtu.be/-jdtfJe_sII?si=gK5vWGXwrCmktctj)

<br>

## 🧠 Assignment:

Update your project (from millstone1) by applying both Navigation and State Management using Provider.
You can choose any idea, just be creative!


Possible Ideas:
- Add a Light/Dark theme switch using Provider
- Manage a favorites list across multiple screens
- Add a shopping cart counter that updates across screens
- Add user login status shared across pages

<br>


## 💡 Additional Resources (Optional)

If you want to see how Provider and Navigation are used in full applications, here are some examples:

- [🥑 Grocery Shop App](https://youtu.be/uSljGJGSl6w)
- [📱 Coffee Shop](https://youtu.be/RPvhoghXn54)
- [👟 Sneaker Shop](https://youtu.be/UcwsuZP071Y)











