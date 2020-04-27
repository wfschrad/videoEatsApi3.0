# Review notes

These are just some feedback items that I see for the project. Thank you for
giving me the chance to review it.

## The overall experience

I am more than impressed that you put in the extra effort to add accessibility
information using the WAI-ARIA standard. Good job, really. This is an
oft-ignored part of Web applications. When you do create your README, make sure
that you include that you put in accessibility features using WAI-ARIA.

Though I couldn't use the app, the log-in and sign-in pages are nicely laid out
and aesthetically pleasing. Well done, there. Forms are hard to make pleasant
and I didn't feel like I was _working_ to use yours.

I couldn't get it up and running on my machine. It seems that the `index.js`
just prints out `console.log('where is my api? ', api);`. I can't give any
feedback about the app.

If you ever find yourself writing something like this, where you're using a
backtick string and only interpolating a variable, then don't use the string
and just pass in the variable by itself. There's usually no reason to have
JavaScript do the work of string manipulation.

```js
// If value is a string
methodCall(`${value}`);

// is usually the same as
methodCall(value);

// which is much clearer in its intent.
```

## Source files

Here is some stuff about the source files.

### README.md

There is not one. :-(

### app.js

Your application server file is standard. That's a really good thing. It means
I'm not unpleasantly surprised by anything in there, I could read it all in less
than 10 seconds, and understood what it was doing. This is what good code looks
like: easily comprehensible (which implies maintainable).

### Seeder files

I like that you address the loading of your data in phases with nice comments in
there so that you can reference them without having to necessarily open up a
database client like Postbird.

### Migration files

I am a fan of explicit. I like that your references in the migration definitions
also contains the "key" property, even though it is assumed "id". I think that
_I_ will start doing that from now on. Thanks for the good idea.

### Model files

Again, nicely done. You let no cruft in there. I can also envision where you are
going with tags and votes. I like that direction. Very good.

### Route files

In your **users.js** route file, you seem to have forgotten to add `requireAuth`
to the majority of your routes. That leaves them open for hacking. For example,
I was able to do `PUT /users/1` and rename the Demo User to "frog legs". Add
`requireAuth` to update user and delete user. Then, in your code, make sure the
id in the URL _matches_ the id in the `req.user.id` value. Otherwise, someone is
being tricksy.

In your **businesses.js**, don't rely on the `userId` from the body to properly
identify the user that is interacting with you application. You should put that
in the token and read it from there, or read it from the restored user in
`req.user.id`. It's tough being a programmer because you have to expect that
every person interacting with your application will do it in a malicious way.
That is good "security posture". «sigh» I wish it weren't so.
