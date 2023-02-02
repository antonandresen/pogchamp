# Contributions

🎉 Thanks for considering contributing to this project! 🎉

These guidelines will help you send a pull request.

If you're submitting an issue instead, please skip this document.

If your pull request is related to a typo or the documentation being unclear,
please click on the relevant page's `Edit` button (pencil icon) and directly
suggest a correction instead.

This project was made with ❤️. The simplest way to give back is by starring and
sharing it online.

Everyone is welcome regardless of personal background. We enforce a
[Code of conduct](CODE_OF_CONDUCT.md) in order to promote a positive and
inclusive environment.

# Development process

First fork and clone the repository. If you're not sure how to do this, please
watch
[these videos](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

Run:

```bash
pnpm install
```

Make sure everything is correctly setup with:

```bash
pnpm test
```

After submitting the pull request, please make sure the Continuous Integration
checks are passing.

Make sure to create a *changeset*, and include it in your PR, so that versioning is automatically handled.

```bash
pnpm changeset
```

We enforce 100% test coverage: each line of code must be tested.

Please use the same style as the rest of the documentation and examples.
