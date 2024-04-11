---
title: Create
nextjs:
  metadata:
    title: Create 
    description: Steps on creating interactive page.
---

Steps to create interactive page and deploy it on the player screen

---

## Interactive options

 - Go to the Interactive options inside Content from your piSignage registered user account.
 - Click on **Add page**
   {% figure src="p5" alt="test" caption="" %}  {% /figure %}

 

### Settings
  This is the basic settings of the page.

  - Add **Page name** and select **Target group**. By default "default" group is selected as a target group.
  - Enable Display QR code if you want to show the QR code on selected target group for scanning and accessing the interactive page.
  - Select the position of the QR code on the screen from 6 different possible positions.

       {% figure src="p6" alt="test" caption="" %}  {% /figure %}


{% callout title="You should know!" %}
  - Page name should be unique and preferably with no spaces.
  - Display QR code is only available for *player2(4.x.x or higher)* players of pisignage.
  - If Display QR code is enabled and the group is already playing a QR code from different interactive page then that is replaced with the new QR code. Basically maximum of one QR code for one group

{% /callout %}

---

### Visibility

Here you are giving access to users who can control the player from their device

  - Choose whether page requires user **login** to access or you want to create a **publically accessible** page
  - If you are creating a **login required** page you have to add the user and password. This will be asked at the time of accessing the page. If you no longer need the user you can delete the user as well.
  - if you are creating a **public** page, you can ask for optional Name, email or phone number of the user. If you choose not to ask for anything user will be provided the username "guest"

   {% figure src="p7" alt="test" caption="" %} {% /figure %}

{% callout type="warning" title="Be cautious making the page public" %}
Although the username and ip address of the user who performed the action is available in the logs, it's good to make the page private. Because if its public then it would mean that you are giving the access to the person who can see the qr code, to control the player.
- maximum of 10 users can be added to an interactive pages.
{% /callout %}

---

### Content

Here you specify what actions are performed by the page. A user who has been given the access from previous tab(visibility) can perform these actions. You can select the **Logo** by default piSignage logo will be shown.

**ACTIONS**
  - #### Override with playlist
     - Set the label of the action button
     - Choose the target screen. You can choose a single player or all the players in the group that this page is asociated to (target group that is set in settings page).
     - Choose playlist to be shown on clicking the action button. Note that only scheduled playlists are avaialable here.
     - Set whether you get back to the original content or play the playlist in loop
  - #### Override with asset
     - Set the label of the action button
     - Choose the target screen. You can choose a single player or all the players in the group that this page is asociated to (target group that is set in settings page).
     - Choose the asset to shown on clicking the action button. Note that only assets available in the scheduled playlists are available here.
     - Set whether you get back to the original content or play the asset in loop
  - #### Turn On/Off TV
     - Set the label of the action button
     - Choose the target screen. You can choose a single player or all the players in the group that this page is asociated to (target group that is set in settings page).
     - Since TV On/Off command takes some time to execute. It is better to give the timeout delay for which duration of time the action button on the page is disabled.
  - #### Upload asset
     - While uploading single asset you can choose it to upload to a playlist or play the asset directly on the screen.
     - Set the label of the action button
     - If you choose to upload to a playlist, please select the playlist and validity of the asset.
     - If you choose to upload to player, please select target screen to display the asset and validity of the asset
  - #### Queue management
     - NOT IMPLEMENTED YET
  - #### Ticker message
     - Set the label of the action button
     - Choose the target screen. You can choose a single player or all the players in the group that this page is asociated to (target group that is set in settings page).
     - Set the ticker message to be played on the target screen/s. User can change the message later while using the page
    
   {% figure src="p8" alt="test" caption="" %}  {% /figure %}

---

### Logs
  
  You can See the logs as to what action were executed and the user details for that action and also Download the logs.
   {% figure src="p2" alt="test" caption="" %}  {% /figure %}

You can then Save the page and download Qr code or copy the link to interactive page. You can only do this after the page is successfully saved.

---

## Additional Info

You can Take the page offline if you wish to do so. Once the page is set offline, user can no longer perform any action. You can delete, update and preview the page after the page is successfully created.

   {% figure src="p1" alt="test" caption="" %}  {% /figure %}
