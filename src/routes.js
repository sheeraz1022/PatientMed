import Patient from './components/Patient.vue'
import Print from './components/Print.vue'

export default[
    {
    path: '/', 
    name: 'Patient',
    component: Patient
    },
    {
    path: '/Print',
    name: 'Print', 
    component: Print,
    props: true
    }
]