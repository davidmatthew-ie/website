---
title: "TrimPress - Trim the Cruft from WordPress"
permalink: /trimpress-trim-the-cruft-from-wordpress/
date: 2020-08-19
tags: ["WordPress"]
---

Over the weekend I released my third plugin, TrimPress. As the name (hopefully) suggests, its aim is to trim away some of the cruft included with a default WordPress install.

![banner-772x250-1](../../media/2020/banner-772x250-1.png)

## Overview

If you're familiar with theme development and site optimisation, you'll no doubt have encountered quite a few of the little tweaks that this plugin offers. Things like dequeuing emoji scripts, disabling XML-RPC, and cleaning up unnecessary legacy links in the head section designed to support applications long since consigned to the internet's historical archives.

Making these tweaks again and again, I figured I'd pile them together and package them as a plugin. I wanted to make it easy to use but also educational in the explanations it offers, as what good is an option if you have to google it to find out what it might do? I've been in this position quite a few times myself.

## Features

For a full list of the features it offers see below, or head on over to the [WordPress plugin repository](https://wordpress.org/plugins/trimpress/) where it now lives!

- Slow down the Heartbeat API to save on admin-ajax usage.
- Disable cart fragments, a resource-intensive WooCommerce script (TrimPress automatically detects WooCommerce and only shows this option if it is active).
- Remove unnecessary clutter from the WordPress section, like RSS, RSD, WLW manifest and adjacent post links.
- Disable the built-in WordPress code editors that allow users to modify plugin and theme code.
- Limit post revisions, which can cause unnecessary database bloat.
- Remove the oEmbed script which transforms YouTube, Twitter and other social links into embedded media by automatically fetching extra scripts and styles from these sites.
- Disable automatic emoji rendering, which adds several extra scripts and styles to your site.
- Disable the XML-RPC interface, an older system for remote WordPress access that can be exploited by hackers.
- Remove the meta generator tag and version url parameters that let potential attackers know what WordPress version you’re using.
- Disable comment autolinking, a feature often exploited by spammers.
