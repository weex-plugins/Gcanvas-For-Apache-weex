
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

tween.js:
	@component build --standalone tween \
		&& mv build/build.js $@ \
		&& rm -fr build

.PHONY: clean tween.js
