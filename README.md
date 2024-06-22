# NXTU - NeXT Usable - Usable components for Websites

#### Collection of useful reusable components for your projects

## Import

```
import { YoutubePreview,UPI } from 'nxtu'
```

## Components

- [Youtube Preview Card](https://docs.nxtu.dev/components/youtube-preview-card)
- [UPI Payment Card](https://docs.nxtu.dev/components/upi-payment-card)

## Examples

### Youtube Preview Card 

```
import { YoutubePreview } from 'nxtu'

<YoutubePreview 
    videoUrl="https://www.youtube.com/watch?v=xxxxxxxxxxx"
/>
```

### UPI Payment Card 

```
import { UPI } from 'nxtu'

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

Any issues found or require support for the components or has any feature requests? [Please open a ticket](https://github.com/nxtopen/nxtu/issues)

## Contribute

Interested in contributing to the package? email us at contact@nxtu.dev

## Sponsors

<img src="https://gitbook.gitbook.io/~gitbook/image?url=https%3A%2F%2F1172530391-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FsdSkN433H8T8xAiH8slE%252Fuploads%252Fn1gUNvnuFiwfifmZt2Zh%252FGitBook-dark.png%3Falt%3Dmedia%26token%3D8dce21ed-4d59-48de-8320-d04f973c950d&width=376&dpr=2&quality=100&sign=7117d837e6fc39a6e94f78e927f963fdb63dfdaa8ad357a8852b8c5f496ce4d9" width="100px"/>