<p align="center"><img alt="A119" src="https://raw.githubusercontent.com/stevenpersia/a119/master/github/a119.png" width="600"/></p>
<p align="center"><img alt="NPM" src="https://img.shields.io/npm/l/a119.svg?style=flat-square">
<img alt="npm" src="https://img.shields.io/npm/v/a119.svg?style=flat-square"></p>
<p align="center"><b>This project is not maintained anymore :(</b></p>

## Overview

**React Design System.** I'm certainly crazy but I want to create my own UI Framework to develop React applications faster. I will regularly update this readme to show the new components. I'll see what it gives. I'm not in a hurry. A better documentation will come soon. If you like it, feel free to star this repo ! :3

## Demo
Check this out and have fun : https://codesandbox.io/s/n15n00o8z4

## Screenshots
<p align="center">
<img alt="avatar" src="https://raw.githubusercontent.com/stevenpersia/a119/master/github/avatar.png" width="500" />
<img alt="avatar-group" src="https://raw.githubusercontent.com/stevenpersia/a119/master/github/avatar-group.png" width="500" />
<img alt="badge" src="https://raw.githubusercontent.com/stevenpersia/a119/master/github/badge.png" width="500" />
<img alt="button" src="https://raw.githubusercontent.com/stevenpersia/a119/master/github/button.png" width="500" />
<img alt="button-group" src="https://raw.githubusercontent.com/stevenpersia/a119/master/github/button-group.png" width="500" />
<img alt="switch" src="https://raw.githubusercontent.com/stevenpersia/a119/master/github/switch.png" width="500" />
<img alt="textfield" src="https://raw.githubusercontent.com/stevenpersia/a119/master/github/textfield.png" width="500" />
<img alt="more" src="https://raw.githubusercontent.com/stevenpersia/a119/master/github/more.png" width="500" />
</p>

## Installation and usage

Install package :
```
npm install a119
```

Import one component :
```
import { Avatar } from "a119";
```

Or multiple components :
```
import { Avatar, AvatarGroup } from "a119";
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

### TextField
| Prop         | Default     | Required | Type     | Example                                                    |
| ------------ | ----------- | -------- | -------- | ---------------------------------------------------------- |
| `name`       | X           | No      | string   | X                                                          |
| `value`       | X | No       | string   | X |
| `placeholder`    | X           | No       | string   | X                                |
| `className`  | X           | No       | string   | X                                                          |
| `isDisabled` | `false`     | No       | boolean  | `true` `false`                                             |
| `helperText`  | X     | No       | string  | X                                           |
| `error`    | `false`          | No       | boolean | `true` `false`                           |
| `success`    | `false`          | No       | boolean | `true` `false`                             |
| `fullwidth`  | `false`     | No       | boolean  | `true` `false`                                             |
| `onBlur`  | X     | No       | function  | `() => alert("Hello world !");`                                           |
| `onChange`  | X    | No       | function  | `() => alert("Hello world !");`                                      |

## Star, Fork, Clone & Contribute

Feel free to contribute on this repository. If my work helps you, please give me back with a star. This means a lot to me and keeps me going!
