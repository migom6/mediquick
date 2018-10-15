# <a id="MediQuick" href="#mediquick">MediQuick</a>

### Table Of Content

1. [Goal](#goal)
1. [MediQuick Features](#mediquick-features)
1. [Dependencies and Technologies Used](#dependencies-and-technologies-used)
1. [Project Status](#project-status)
    1. [Roadmap](#roadmap)
1. [Contact](#contact)


## Goal

**The goal** is to find a list of diagnosis from a list of medical symptoms, and also give out proper suggestion for treatments and specialist for a given medical condition/diagnosis.

**This project is an MVP** and is solely made for the purpose of competing for getting selected in hackercamp 2018, innovaccer

## MediQuick Features
MedicQuick is a web app, which is use to suggest users possible treatments from user input information. 

![](https://github.com/migom6/mediquick/blob/master/assets/main.png)

 - **Full-Text-Search:** Search issues and symptoms using natural language *eg: I am having fever and headache*
 - **Drop Down:** Get list of all available symptoms and issues from where you can select from**
 - **Auto-complete list:** As you type you can see the list of possible symptoms. 
 - **Diagnosis** For some selected combination of symptoms find the possible diagnosis.
 - **Treatments**: Get treatment suggestions when you select a particular diagnosis.
 - **Caching data** The treatment data that has been scraped is saved in a database, so that the responses of the subsequent requests for the same diagnosis is faster

## Dependencies and Technologies Used
Mediquick comprises of frontend and backend web technologies.


### Roadmap:
- [Automatic Backup to Memex Cloud](https://worldbrain.io/product/cloud-backup/)
- [Making Annotations searchable](https://github.com/WorldBrain/Memex/issues/580)
- [Saving & searching social posts and comments on Facebook and Twitter](https://worldbrain.io/product/search_social_feeds/)
- [Collaborative Collections](https://worldbrain.io/product/collaborative-collections/)
- [Sharing & Discussing Annotations](https://worldbrain.io/product/collaborative-annotations/)
- [Integration with Pocket](https://worldbrain.io/product/integration-with-pocket)


## Values

### Your data is none of our business
With most free software tools you and your data are the product. Not with us. Our approach to decentralisation and our economic model allow us to offer most of Memex services for free. Your data is stored on your computer or can be synced with servers of your choice (#selfhosting). Our business model is based on providing real services to you through subscription based cloud support.

### Interoperability & No lock-ins
We believe that users should be able to freely chose the providers of software they want. Even when switching to other providers of Memex, they should still be able to communicate with people using other Memexes.

### Collaboration, not monopolisation
In 10 years time we envision 100s of Memex-y tools that are all adapted to the individual workflows different professions and people have. To get there, it is necessary to remove the incentives for Memex providers to lock-in their users and monopolise. 
The question for us was: How can we create an ecosystem, in which it is more profitable to collaborate than to compete, and where monopolisation is almost impossible. To get there we combine interoperability with our financial model called [Steward Ownership](https://blog.p2pfoundation.net/steward-ownership-is-capitalism-2-0/2018/05/11). While interoperability will make it harder for providers to monopolise, because users have less lock-ins, Steward Ownership provides a company with the intrinsic motivations to not grow at all costs. Instead they are able to focus on providing profit generating service to less users, and reduce costs by collaborating with other Memex providers on core infrastructure. More details on this you find [on our crowdfunding page](https://worldbrain.io/crowdfunding-memex/#why).

## Our Economy

*worldbrain.io* does not take Venture Capital money in order to finance the development and growth of Memex. 
Instead we have 2 funding mechanism that aim to make us a fully community- and user-focussed service. 
On the one hand we run our own [feature based crowdfunding](https://worldbrain.io/crowdfunding-memex/), which allows users to back the development of features in advance, and in return get up to 4.5x back in Memex Credits. Those then can be used to modularly pay for premium services we offer and effectively get discounts of up to 80%. 

On the other hand we use a financial model called [Steward Ownership](https://blog.p2pfoundation.net/steward-ownership-is-capitalism-2-0/2018/05/11) which will provide investors and collaborators with a fixed return on invest that is paid with the profits we are making. With that we prevent worldbrain.io to become a speculative commodity with a need to become a monopoly in order to provide investors with a financial return. 


## Contributing

### Report Bugs & Feature Requests

Thanks for taking the effort to report that something does not work. Just open an issue here on [GitHub](https://github.com/WorldBrain/Memex/issues/new).
For **feature requests** best head over to [our community board](https://worldbrain.helprace.com/s1-general/ideas), so that other people can vote on them too.

### Open Tasks

Wanna contribute making Memex better? Great! That's the spirit :)
Just head over to the issues section and grab one of the "[Newcomer Tasks](https://github.com/WorldBrain/Memex/issues?q=is%3Aissue+is%3Aopen+label%3A%22Newcomer+Task%22)". We wanna avoid unnecessary work on both sides due to miscommunications. So before you start, please leave a comment in the issue you are most interested tackling, and clarify what you understand needs to be done and voice any open questions you have. For questions not directly related to the task, you can also [contact the team via Slack](http://join-worldbrain.herokuapp.com/). 

### Funding Memex

Interested in helping to fund our development? 
- **For anything under 200€**, please check out our [feature based crowdfunding page](https://worldbrain.io/crowdfunding-memex) where you can help supporting the development and get Memex Premium Credits in return. Those then can be used to flexibly pay for premium upgrades. 
- **For more than 1000€**, please [get in touch with Oliver](mailto:oli@worldbrain.io) to learn more about how we fund our business and the modes of investing money into worldbrain.io

### Becoming a collaboration partner

We are all about how to create holistic incentives for more collaboration between business, as you can see in [this section](#collaboration-not-monopolisation). If you're interested in collaborating on Memex development or integrating with it, please [get in touch with Oliver](mailto:oli@worldbrain.io)

### Getting started as a developer

1. [Click here](./GETTING-STARTED.md#installation) for all instructions on how to build Memex so you can hack on it.
2. [Click here](./GETTING-STARTED.md#code-overview) to get an overview of Memex code anatomy. 
    * [A brief overview of Web Extensions](./GETTING-STARTED.md#a-brief-overview-of-web-e)
    * [Application Structure](./GETTING-STARTED.md#application-structure)
    * [Dependencies](./GETTING-STARTED.md#dependencies)

## Contact

Find us in [our Team chat](https://join-worldbrain.herokuapp.com/) or contact us [via email](mailto:info@worldbrain.io).

