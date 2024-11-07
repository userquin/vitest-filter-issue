import {defineConfig} from "vitest/config";

export default defineConfig({
    test: {
        testNamePattern: '^((?!does not include test that).)*$',
    }
})
