class Api::BarsController < ApplicationController
    wrap_parameters include: Bar.attribute_names

    def index
        @bars = Bar.all
        if @bars
            render 'api/bars/index'
        else
            render json: {errors: ['No Bars selected']}
        end
    end

    def show
        @bar = Bar.find_by(:id)
        if @bar
            render 'api/bars/show'
        else
            render json: {errors: ['Bar not found'] }
        end
    end

    private

    def bar_params
        params.require(:bar).permit(:name, :address, :description, :type, :price, :capacity, :image_urls)
    end
end
