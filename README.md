# tech-assessment-restful

Hellow NS8. This is my submission for the technical assessment for the backend. My apologies for not getting all parts finished.

## Plan

My plan of attack went as such:

1. Get an express app up and running utilizing Typescript.
2. Stub out routes for activity and user endpoints.
3. Creation of middleware for logging. (You'll see in my middleware a comment about how I first started thinking this was logging of all activities, but in re-reading I figured out this was not the case. Time wasted.)
4. Create User class in Typescript
5. Create User store
6. Finish endpoints for User creation, edit, and delete.
7. Create get activity endpoint - Unfinished
8. Create activity store - Unfinished

## Issues encountered

I thought I had for the longest time thought my store was broken and always instantiating a new store at every call, even though it was a simple error right before insert of a new user.

## Wishlist items

In current projects I've worked with, I've standardized route(controller) responses. They are Typescript interfaces like IUserResponse that always have 'success: boolean', 'message: string' and then what would have been 'user: User' and 'users: User[]'. It helps force the practice of sending appropriate error messages and why. And handling edge cases.

I have used both date-fns and moment to handle time comparisions. I do feel comfortable on filtering arrays with dates in them on actions. 

## Thanks

Thanks for taking a look at this, the four hours went fast for me. Wanted to show you what I was able to get done in that time.