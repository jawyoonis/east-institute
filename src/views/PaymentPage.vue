<template>
  <div class="container mx-auto px-6 py-12 bg-white">
    <h1 class="text-4xl font-extrabold text-gray-900 text-center mb-6">Payment Details</h1>

    <div class="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <!-- Plan Details -->
      <h2 class="text-2xl font-bold text-gray-900 mb-4">
        {{ planType === "monthly" ? "Monthly Plan" : "Annual Plan" }}
      </h2>

      <p class="text-gray-700 mb-4">
        {{ planType === "monthly"
          ? "Pay as you go with access to all courses and mentorship."
          : "Commit for a year and get exclusive premium benefits."
        }}
      </p>

      <p class="mt-4 text-xl font-bold text-red-600">
        Price: {{ planType === "monthly" ? "$49/month" : "$499/year (Save 15%)" }}
      </p>

      <!-- Payment Method Selection -->
      <div class="mb-6">
        <label class="block text-gray-700 font-medium mb-2">Select Payment Method</label>
        <select
          v-model="selectedPaymentMethod"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="" disabled>Select a payment method</option>
          <option value="zaad">ZAAD</option>
          <option value="edahab">E-Dahab</option>
          <option value="card">Credit/Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="check">Bank Check</option>
          <option value="other">Other</option>
        </select>
      </div>

      <!-- Dynamic Payment Fields -->
      <div v-if="selectedPaymentMethod">
        <!-- ZAAD & E-Dahab Payment -->
        <div v-if="selectedPaymentMethod === 'zaad' || selectedPaymentMethod === 'edahab'" class="mb-4">
          <label for="phone" class="block text-gray-700 font-medium">Phone Number</label>
          <input
            type="tel"
            id="phone"
            v-model="form.phone"
            required
            class="w-full p-3 border border-blue-500 bg-blue-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your mobile number"
          />
        </div>

        <!-- Credit/Debit Card Payment -->
        <div v-if="selectedPaymentMethod === 'card'" class="mb-4">
          <label for="card" class="block text-gray-700 font-medium">Card Number</label>
          <input
            type="text"
            id="card"
            v-model="form.card"
            required
            maxlength="19"
            class="w-full p-3 border border-green-500 bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="1234 5678 9012 3456"
          />
          <div class="mt-4 flex space-x-4">
            <div class="w-1/2">
              <label for="expiry" class="block text-gray-700 font-medium">Expiry Date</label>
              <input
                type="text"
                id="expiry"
                v-model="form.expiry"
                required
                maxlength="5"
                class="w-full p-3 border border-green-500 bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="MM/YY"
              />
            </div>
            <div class="w-1/2">
              <label for="cvv" class="block text-gray-700 font-medium">CVV</label>
              <input
                type="text"
                id="cvv"
                v-model="form.cvv"
                required
                maxlength="4"
                class="w-full p-3 border border-green-500 bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="123"
              />
            </div>
          </div>
        </div>

        <!-- PayPal Payment -->
        <div v-if="selectedPaymentMethod === 'paypal'" class="mb-4">
          <label for="paypal" class="block text-gray-700 font-medium">PayPal Email</label>
          <input
            type="email"
            id="paypal"
            v-model="form.paypalEmail"
            required
            class="w-full p-3 border border-yellow-500 bg-yellow-50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="your-email@example.com"
          />
        </div>

        <!-- Bank Check Payment -->
        <div v-if="selectedPaymentMethod === 'check'" class="mb-4">
          <label for="bankName" class="block text-gray-700 font-medium">Bank Name</label>
          <input
            type="text"
            id="bankName"
            v-model="form.bankName"
            required
            class="w-full p-3 border border-purple-500 bg-purple-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your bank name"
          />
          <label for="checkNumber" class="block text-gray-700 font-medium mt-4">Check Number</label>
          <input
            type="text"
            id="checkNumber"
            v-model="form.checkNumber"
            required
            class="w-full p-3 border border-purple-500 bg-purple-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter check number"
          />
        </div>
      </div>

      <!-- Confirm Payment Button -->
      <button
        @click="processPayment"
        class="w-full px-6 py-3 bg-black text-white rounded-md shadow-lg hover:bg-gray-900 transition mt-6"
      >
        Confirm Payment
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentPage",
  data() {
    return {
      planType: "monthly", // Default plan
      selectedPaymentMethod: "", // Store selected payment method
      form: {
        phone: "",
        card: "",
        expiry: "",
        cvv: "",
        paypalEmail: "",
        bankName: "",
        checkNumber: "",
      },
    };
  },
  created() {
    // Get the plan from query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get("plan");
    if (plan === "annual") {
      this.planType = "annual";
    }
  },
  methods: {
    processPayment() {
      if (!this.selectedPaymentMethod) {
        alert("Please select a payment method before proceeding.");
        return;
      }
      alert(`Payment for ${this.planType} plan using ${this.selectedPaymentMethod} has been processed successfully!`);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
