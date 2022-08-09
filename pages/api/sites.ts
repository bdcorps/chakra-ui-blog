// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getSite() {
  const site = {
    email: "sukh@blawg.cc",
    subdomain: "sukh",
    name: "Sukhpal Saini",
    description: "Full Stack Dev at XYZ",
    posts: [
      { id: 1, title: "Building a Subscription System using Stripe, Node.js, and MongoDB - Part 1: Recurring Payments", description: "We will create a subscription system that will let our users pay for a monthly plan using Stripe Checkout.", image: "https://picsum.photos/800", link: "https://www.saasbase.dev/subscription-payments-1-adding-basic-and-pro-subscription-plans-using-stripe/" },
      { id: 2, title: "Authentication System using Passport.js, Node.js, and MongoDB - Part 1: Google Login", description: "We will create an authentication system that will let our users log in using Google Sign-In.", image: "https://picsum.photos/800", link: "https://www.saasbase.dev/building-an-authentication-system-using-passport-js-node-js-and-mongodb-part-1-google-login/" }
    ]
  }

  return site;
}
