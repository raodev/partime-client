<template>
	<Page class="page">
		<GridLayout rows="*" height="1500px">
			<RadSideDrawer ref="drawer">
				<StackLayout ~drawerContent backgroundColor="gray">
					<StackLayout height="56" style="text-align: center; vertical-align: center;">
						<Label text="Navigation Menu" />
					</StackLayout>
					<StackLayout>
						<Label text="Primary" padding="10" backgroundColor="lightgray" />
						<Label text="Social" padding="10" />
						<Label text="Promotions" padding="10" />
						<Label text="Labels" padding="10" backgroundColor="lightgray" />
						<Label text="Important" padding="10" />
						<Label text="Starred" padding="10" />
						<Label text="Sent Mail" padding="10" />
						<Label text="Drafts" padding="10" />
					</StackLayout>
					<Label text="Close" color="lightgray" padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap" />
				</StackLayout>
				<StackLayout ~mainContent>
					<Label :text="mainContentText" textWrap="true" fontSize="13" padding="10" />
					<Button text="Open Drawer" @tap="onOpenDrawerTap" margin="10" style="horizontal-align: left" />
				</StackLayout>
			</RadSideDrawer>
		</GridLayout>
	</Page>
</template>

<script>
require("nativescript-vue").registerElement(
    "RadSideDrawer",
    () => require("nativescript-ui-sidedrawer").RadSideDrawer
);

require("nativescript-ui-chart/vue");

export default {
    methods: {
        onOpenDrawerTap() {
            this.$refs.drawer.nativeView.showDrawer();
        },
        onCloseDrawerTap() {
            this.$refs.drawer.nativeView.closeDrawer();
        }
    },

    data() {
        return {
            mainContentText:
                "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component" +
                " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.",

            categoricalSource: [
                {
                    Country: "Germany",
                    Amount: 15,
                    SecondVal: 14,
                    ThirdVal: 24
                },
                {
                    Country: "France",
                    Amount: 13,
                    SecondVal: 23,
                    ThirdVal: 25
                },
                {
                    Country: "Bulgaria",
                    Amount: 24,
                    SecondVal: 17,
                    ThirdVal: 23
                },
                {
                    Country: "Spain",
                    Amount: 11,
                    SecondVal: 19,
                    ThirdVal: 24
                },
                {
                    Country: "USA",
                    Amount: 18,
                    SecondVal: 8,
                    ThirdVal: 21
                }
            ]
        };
    },
    mounted() {
        alert(12);
    }
};
</script>

<style scoped>
	.home-panel {
		vertical-align: center;
		font-size: 20;
		margin: 15;
	}

	.description-label {
		margin-bottom: 15;
	}
</style>
