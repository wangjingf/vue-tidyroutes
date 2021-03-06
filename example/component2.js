
import Routes from 'vue-tidyroutes';

const Component2 = {
	template: `
	<div>
		<h2>Component2</h2>
		<router-view></router-view>
	</div>`
};

const ChildComponent1 = { template: '<div>child component 1</div>' };
const ChildComponent2 = { template: '<div>child component 2</div>' };

Routes.route('/component2', {
	name: 'component2',
	component: Component2,
    children: {

        'child-1': {
            name: 'child-1',
            component: ChildComponent1
        },

        'child-2': {
            name: 'child-2',
            component: ChildComponent2
        }

    }
});

export default Component2;
