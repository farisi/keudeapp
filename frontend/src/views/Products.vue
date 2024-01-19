<script setup>
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import ProductService from '@/services/ProductService';
import { ref, onBeforeMount } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Rating from 'primevue/rating';

const products = ref(false);

const productService = new ProductService();
const loading2 = ref(null);
const expandedRows = ref([]);
const filters1 = ref(null);

onBeforeMount(() => {
  productService.getProducts().then((data) => (products.value = data));
  loading2.value = false;
  initFilters1();
})

const initFilters1 = () => {
  filters1.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    price: { value: null, matchMode: FilterMatchMode.EQUALS },
    status: { value: null, matchMode: FilterMatchMode.EQUALS }
  }
}

const clearFilter1 = () => {
  initFilters1();
}

const expandAll = () => {
  expandedRows.value = products.value.filter((p) => p.id);
};
const collapseAll = () => {
  expandedRows.value = null;
};

const formatCurrency = (value) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const formatDate = (value) => {
  return value.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

</script>

<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Row Expand</h5>
        <DataTable :value="products" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id"
          :rowHover="true" filterDisplay="menu" :loading="loading2" :filters="filters1" responsiveLayout="scroll"
          v-model:filters="filters1" serverSide="true" :global-filter-fields="['name', 'price', 'category', 'status']">
          <template #header>
            <div class="flex justify-content-between flex-column sm:flex-row">
              <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined mb-2"
                @click="clearFilter1()" />
              <span class="p-input-icon-left mb-2">
                <i class="pi pi-search" />
                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" style="width: 100%" />
              </span>
            </div>
          </template>
          <template #empty> No customers found. </template>
          <template #loading> Loading customers data. Please wait. </template>
          <Column header="No" field="no">
            <template #body="slotProps">
              {{ slotProps.index + 1 }}
            </template>
          </Column>
          <Column field="name" header="Name" :sortable="true">
            <template #body="{ data }">
              {{ data.name }}
            </template>
            <template #filter="{ filterModel }">
              <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name" />
            </template>
          </Column>
          <Column header="Image">
            <template #body="slotProps">
              <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="shadow-2"
                width="100" />
            </template>
          </Column>
          <Column field="price" header="Price" :sortable="true">
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data.price) }}
            </template>
          </Column>
          <Column field="category" header="Category" :sortable="true">
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data.category) }}
            </template>
          </Column>
          <Column field="inventoryStatus" header="Status" :sortable="true">
            <template #body="slotProps">
              <span
                :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{
                  slotProps.data.inventoryStatus }}</span>
            </template>
          </Column>
          <Column field="rating" header="Rating">
            <template #body="slotProps">
              <Rating :modelValue="slotProps.data.rating" :cancel="false" />
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
::v-deep(.p-datatable-frozen-tbody) {
  font-weight: bold;
}

::v-deep(.p-datatable-scrollable .p-frozen-column) {
  font-weight: bold;
}
</style>