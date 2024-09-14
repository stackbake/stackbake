<!-- <img src="https://raw.githubusercontent.com/nxtopen/nxtu/main/banner.png" /> -->

## StackBake Components - reusable components and tools for faster developmnet

#### Collection of useful reusable components for your projects

## Import

```
import { YoutubePreview,UPI } from 'stackbake'
```

## Components

- [Youtube Preview Card](https://docs.nxtu.dev/components/youtube-preview-card)
- [UPI Payment Card](https://docs.nxtu.dev/components/upi-payment-card)

## Examples

### Youtube Preview Card 

```
import { YoutubePreview } from 'stackbake'

<YoutubePreview 
    videoUrl="https://www.youtube.com/watch?v=xxxxxxxxxxx"
/>
```

### UPI Payment Card 

```
import { UPI } from 'stackbake'

<UPI
upiOptions={
    {
    "payeeVPA": "some@provider",
    "payeeName": "Some Payee Name",
    "amount": 100,
    "note": "Test transaction using UPI"
    }
} />
```

## Issues & Support

Any issues found or require support for the components or has any feature requests? [Please open a ticket](https://github.com/stackbake/stackbake-components/issues)

## Contribute

Interested in contributing to the package? email us at contact@stackbake.com