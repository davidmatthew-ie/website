---
title: "Guillotheme - a plugin to chop the head off your WordPress theme"
permalink: /guillotheme-a-plugin-to-chop-the-head-off-your-wordpress-theme/
date: 2020-04-14
tags: ["WordPress"]
---

Today I released version 1.0.0 of Guillotheme, a plugin that chops the front-end (i.e. the head) right off your theme by restricting access to the front-end.

Specifically, it does this by using conditional (and customisable) redirects, to prevent accidental access to WordPress-generated front-end permalinks. These are unnecessary in the case of a headless or decoupled set-up, and could potentially confuse non-technical users or other content editors when WordPress is being used headlessly (i.e. purely for its CMS capabilities).

It can be downloaded for free from the [official WordPress repository](https://wordpress.org/plugins/guillotheme/).
