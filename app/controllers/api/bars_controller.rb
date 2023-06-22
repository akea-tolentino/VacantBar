class Api::BarsController < ApplicationController
    wrap_parameters include: Bar.attribute_names

    def index
        @bars = Bar.all
        if @bars
            render :index
            # render 'api/bars/index'
        else
            render json: {errors: ['No Bars selected']}
        end
    end

    def show
        @bar = Bar.find(params[:id])
        if @bar
            render :show
        else
            render json: {errors: ['Bar not found'] }
        end
    end

    private

    def bar_params
        params.require(:bar).permit(:name, :address, :description, :type, :price, :capacity, images: [])
    end
end
