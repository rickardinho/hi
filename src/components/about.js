import React from 'react';
import { render } from 'react-dom';
import { H2, H3, H4, P, TeamDiv, TeamMemberDiv, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';
import Dave from './../images/dave.jpg';
import Damian from './../images/damian.jpg';

const About = () => (
  <div>
    <div className="About">
      <div className="About-header">
        <H2>About Spark</H2>
      </div>

      <div>
        <H4>In the beginning</H4>

        <P>Spark was co-founded by Damian and Dave. They are always excited to hear from users’ experiences of Spark.</P>

        <P>Damian and Dave lived busy lives in London.&nbsp; They like to go out and socialise with friends, go to gigs and concerts and go on weekend trips away.&nbsp; They found it was difficult to get friends to agree on the best time to do things.&nbsp; Their friends had a myriad of interests and sometimes it was difficult to find things to do that appealed to more than a few friends.</P>


        <P>Dave explains, “Many times I would float an idea to friends, for example a ski-trip or a night out, and then find I got too busy with work to chase up who's still keen or who’s definitely coming.&nbsp; I wanted to spend my free time socialising and doing things and not being an event manager.”</P>

        <P>He continues, “I love music and often when trying to book tickets for holidays or concerts, I would ask who's coming and struggle to get people to commit, and then the price of flights would go up or tickets would be sold out.”</P>
        <P>Damian and Dave also felt that they struggled to find photos of their friends from the nights out, holidays and parties.&nbsp; They used apps like Facebook and Dropbox, but it was a chore to get everyone to share photos in the same place and organising them was a pain.</P>
        <P>Damian explains, “I got really frustrated at not being able to see all the photos my friends and I had taken in one place.&nbsp; I couldn’t be bothered sorting through photos and would never get round to organising them into albums.”</P>
        <P>“When I thought about it, I really wanted my photos sorted by life events. This is the way I want to reminisce, by thinking of a past life event, and re-living it by looking at the photos.” he says.</P>
        <P>Dave chips in, “A great example was my girlfriend’s birthday party.&nbsp; We knew people had been taking great photos from that night, and even though she emailed round all of our friends asking for their pictures, we knew she was missing a large chunk of the best photos from that day.”</P>

        <P>“Not everybody likes to share too much on Facebook, and we chatted to our friends and they preferred to share photos between small groups of friends.&nbsp; Most of them used Whatsapp, but found it wasn’t great when it came to managing events, and photos weren’t organised well. A lot of the time banter would get in the way of the important details and pictures.”</P>
        <P>This frustration convinced Dave and Damian to co-found Spark to take the pain out of organising events with friends and make it easy for photo albums to be created for each event.</P>

        <H4>Our vision for Spark</H4>

        <P>We are committed to keeping our app simple and easy to use.&nbsp; Every friend and family member should be able to use it.&nbsp; We strive to make Spark the fastest way to organise events and photos and allow the user to spend more time having fun with the people they love the most.&nbsp; Spark is serious about security and keeps all your photos and details secure and private.</P>

        <H4>Help us to improve</H4>
        <P>We are working hard to make Spark the best it can be.&nbsp; We are always keen to hear your feedback and love hearing about your experiences with Spark.&nbsp; Send us a message if you need anything, and we will be quick to respond and help you out.</P>
        <P>Thankyou for using Spark</P>


        <H3>The Spark Team</H3>

        <TeamDiv>
          <TeamMemberDiv>
            <img src={Dave} alt="" width="245" height="299" />
            <H4>Dave</H4>
            <P>co-founder</P>
            <P>Music: Funk, Indie, Electronica.</P>
            <P>Likes: sport, travelling and technology.</P>
          </TeamMemberDiv>
          <TeamMemberDiv>
            <img src={Damian} alt="" width="246" height="300" />
            <H4>Damian</H4>
            <P>co-founder</P>
            <P>Music: Cheese, stuff your Dad likes.</P>
            <P>Likes: Theatre and Meditation.</P>
          </TeamMemberDiv>


        </TeamDiv>

      </div>

    </div>
  </div>
);

export default About;
