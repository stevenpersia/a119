<div style="text-align:center">
<p>LOGO</p>
<p><img alt="NPM" src="https://img.shields.io/npm/l/a119.svg?style=flat-square">
<img alt="npm" src="https://img.shields.io/npm/v/a119.svg?style=flat-square">
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/a119.svg?style=flat-square">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/stevenpersia/a119.svg?style=flat-square"></p>
</div>

## Overview

**React Design System.** I'm certainly crazy but I want to create my own UI Framework to develop React applications faster. I will regularly update this readme to show the new components. I'll see what it gives. I'm not in a hurry. A better documentation will come soon. If you like it, feel free to star this repo ! :3

## Screenshots


## Demo
Check this out and have fun : https://codesandbox.io/s/n15n00o8z4

## Installation and usage

Install packages :
```
npm install a119
```


## Props

### Avatar
| Prop        | Default  | Required | Type     | Example                                  |
| ----------- | -------- | -------- | -------- | ---------------------------------------- |
| `src`       | X        | Yes      | string   | X                                        |
| `alt`       | X        | Yes      | string   | X                                        |
| `size`      | `medium` | No       | string   | `tiny` `small` `medium` `large` `big`    |
| `variant`   | `circle` | No       | string   | `square` `circle`                        |
| `presence`  | X        | No       | string   | `online` `busy` `away` `focus` `offline` |
| `onClick`   | X        | No       | function | `() => alert("Hello world !");`          |
| `className` | X        | No       | string   | X                                        |

### AvatarGroup
Soon !

### Badge
| Prop    | Default     | Required | Type   | Example                                                    |
| ------- | ----------- | -------- | ------ | ---------------------------------------------------------- |
| `value` | X           | Yes      | number | X                                                          |
| `type`  | `secondary` | No       | string | `primary` `secondary` `success` `warning` `danger`  `help` |

### Button
| Prop         | Default     | Required | Type     | Example                                                    |
| ------------ | ----------- | -------- | -------- | ---------------------------------------------------------- |
| `text`       | X           | Yes      | string   | X                                                          |
| `type`       | `secondary` | No       | string   | `primary` `secondary` `success` `warning` `danger`  `help` |
| `variant`    | X           | No       | string   | `outlined` `dashed` `link`                                 |
| `className`  | X           | No       | string   | X                                                          |
| `isDisabled` | `false`     | No       | boolean  | `true` `false`                                             |
| `isLoading`  | `false`     | No       | boolean  | `true` `false`                                             |
| `onClick`    | X           | No       | function | `() => alert("Hello world !");`                            |
| `fullwidth`  | `false`     | No       | boolean  | `true` `false`                                             |


### ButtonGroup
Soon !

### Switch
Soon !

## Star, Fork, Clone & Contribute

Feel free to contribute on this repository. If my work helps you, please give me back with a star. This means a lot to me and keeps me going!
