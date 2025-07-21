---
title: How to Use SVN on the Command Line for WordPress Plugin Development
permalink: /svn-on-the-command-line-for-wordpress/
date: 2025-05-12
tags: ['WordPress']
---

In this tutorial I'll run through the main SVN commands I use the keep [my WordPress plugins](https://profiles.wordpress.org/davidmatthew/#content-plugins) updated. In a hurry? [Checkout the summary](#summary).

## Why use SVN? And on the Command Line?

I have a few WordPress plugins that I maintain, and one of the main pain points of WordPress plugin development (for me at least) has been having to use [Subversion (SVN)](https://subversion.apache.org/) rather than the more popular [Git](https://git-scm.com/) to version control the repositories. You can use Git too of course (and I do) but you can't _just_ use Git.

In the past I've used GUI-based tools like [SmartSVN](https://www.smartsvn.com/) and [Tortoise SVN](https://tortoisesvn.net/) to avoid having to learn a new set of CLI commands, but once I actually looked into what these commands were, I found the CLI much simpler and more transparent than the GUI equivalents. GUI tools can also change things like licensing without warning (SmartSVN, I'm looking at you) and likely contain a lot more functionality than you'll ever need.

Plus, if you're like me, updating your plugins is the _only_ time you ever use SVN, so a dedicated tool is a little overkill and can complicate rather than simplify your workflow. All you really need is a quick recap of the most common commands, and the purpose of this post is to provide these.

## Installing SVN

The first thing we need to do is get SVN on our system. This process varies depending on your operating system, so if you're not using Ubuntu, check out [alternative installation instructions by OS here](https://subversion.apache.org/packages.html).

If you are on Ubuntu, type the following into your terminal:

```bash
sudo apt-get install subversion
```

## Getting Your Repo

Once your WordPress plugin has been reviewed and approved, you'll be given your plugin URL. For this tutorial I'll use one of my own plugins, [Trimpress](https://wordpress.org/plugins/trimpress/), as an example. Navigate to where you want to store the plugin (don't try to copy it into plugins folder of a WordPress local development environment - more on this in a minute); I'd recommend just using your home folder or something similar.

Checking out the repository using the checkout command:

```bash
svn checkout https://plugins.svn.wordpress.org/trimpress
```

If you checked it out some time ago and you're not the only developer working on the plugin, you'll want to make sure your copy is up to date. This would be the equivalent of a `git pull`, and to do it you'd run the update command:

```bash
svn update
```

## Folder Structure

The reason the SVN repository isn't suitable to copy into a local dev WordPress plugins folder is due to the folder structure. Here's the structure of the SVN version of my Trimpress plugin:

```bash
trimpress
└── assets
└── branches
└── tags
└── trunk
```

The trunk folder contains the actual release, i.e. the code that gets installed in a WordPress user's plugins folder. So it's the contents of _this_ folder that you'd version control with a tool like Git (SVN is intended only as a _release_ repository, not something to manage incremental changes).

The assets folder is where you'd store the plugin graphics and screenshots; the branches folder would contain other development branches, if any; and the tags folder is where you'd store previous releases.

## Quickly Updating the Readme

A lot of the time with WordPress plugin development all you'll want to do is quickly update the `readme.txt` file just to inform users that you've tested your plugin with the latest version of WordPress.

Doing this is super simple, even easier than it would be with Git. Why? Because with SVN staging your files before committing them is optional. So if all you need to do is update the `readme.txt` file, just jump into the file itself in the trunk folder, save your change, and commit it like so:

```bash
svn commit -m "Tested with WordPress [whatever version is current]."
```

At this point you'll likely be prompted for your WordPress.org login credentials, and once you verify them you're good to go! Your plugin page should reflect the update within a matter of seconds.

## A Word About My Workflow

I use DDEV for my WordPress plugin development, and if you're not familiar with DDEV I'd urge you to give it a try. It can manage a whole host of other CMS's besides WordPress (I first encountered when I moved into Drupal development), it's got WP CLI built-in and it can spin up a test environment for your plugins quickly and painlessly.

As I mentioned previously, I use Git to version control the code that eventually goes into the SVN trunk folder, so once I have a DDEV WordPress instance set up, I clone the repository into the plugins folder like so:

```bash
cd [your-ddev-project-folder]/wp-content/plugins

git clone git@github.com:davidmatthew-ie/trimpress.git
```

## Creating a Tag

The first step before you update the trunk is to copy the existing version to the tags folder. This is so that it can be retrieved as a release in its own right, so that users can roll back to it if necessary or just browse it from the WordPress repository.

```bash
svn copy trunk tags/1.1.0
```

## Removing Old Tags

It's a good idea to keep a few previous releases available to users (I usually limit it to three), but too many and your repo becomes unnecessarily cluttered. Deleting a tag can be done using the delete command.

```bash
svn delete tags/1.0.0
```

## Copying and Committing

I'll be honest - I don't do anything fancy to get my updated files from Git into the SVN trunk folder. There are ways to sync Git with SVN but good old fashioned copying and pasting works just as well. What I do is copy over everything from the Git repository (except the `.git` folder) into the trunk, and then confirm what's been changed using the status command.

```bash
svn status
```

In the case of my update to Trimpress here's what the status command confirmed. `D` means deleted files, `A` means added files and `M` means modified files.

```bash
D       tags/1.0.0
A  +    tags/1.1.0
M       trunk/classes/class-trim.php
M       trunk/readme.txt
M       trunk/trimpress.php
```

Once you're happy with this, you're ready to commit to the repository.

```bash
svn commit -m "Removed deprecated dynamic class property."
```

## Summary

Here's the TLDR version of the post if all you need is a quick reminder:

- Installation: `sudo apt-get install subversion`
- Checking out: `svn checkout https://plugins.svn.wordpress.org/your-plugin-name`
- Syncing: `svn update`
- Creating a tag: `svn copy trunk tags/[version-number]`
- Deleting a tag: `svn delete tags/[version-number]`
- Committing: `svn commit -m "Your commit message."`
